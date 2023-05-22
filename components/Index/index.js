import React, { useState, useEffect } from 'react';
import styles from '../../styles/Pages.module.css';
import { getAllCookies } from '../../lib/cookieUtil';
import { genshinRecord } from '../../lib/genshinUtil';
import { accountRecord } from '../../lib/accountUtil';

export default function Index({ navigateToPage }) {
  const [cookies, setCookies] = useState([]);
  const [accountList, setAccountList] = useState([]);
  const [account, setAccount] = useState({}); // [game_biz, region, game_uid, nickname, level]
  const [accountIndex, setAccountIndex] = useState(0);
  const [current_resin, setCurrentResin] = useState('');
  const [resin_recovery_time, setResinRecoveryTime] = useState(0);
  const [total_sign_day, setTotalSignDay] = useState(0); // total sign day
  const [is_sign, setIsSign] = useState(false); // is sign today
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCookies(async (cookies) => {
      if (cookies.length > 0) {
        // Do something with the cookies
        setCookies(cookies);;
        getData(cookies);
      } else {
        // No cookies found
        console.log('No cookies found');
      }
    });
  }, []);

  async function getData(cookies) {
    setIsLoading(true);
    const accountList = await accountRecord(cookies);
    if (accountList.error) {
      setCurrentResin('Please login to hoyolab');
      return;
    }
    setAccountList(accountList);
    chrome.storage.sync.get(['account_index'], async function (items) {
      if (typeof items.account_index === 'undefined') {
        chrome.storage.sync.set({ 'account_uid': accountList[accountIndex].game_uid }, function () {
          console.log('Value uid is set to ' + accountList[accountIndex].game_uid);
        });
        setAccount(accountList[accountIndex]);
        const records = await genshinRecord(cookies, accountList[accountIndex].game_uid);
        if (records.error) {
          setCurrentResin('Please login to hoyolab');
          return;
        }
        const dailyNote = records.dailyNote;
        const dailyInfo = records.dailyInfo;
        setCurrentResin(`${dailyNote.current_resin} / ${dailyNote.max_resin}`);
        setResinRecoveryTime(dailyNote.resin_recovery_time);
        setTotalSignDay(dailyInfo.total_sign_day);
        setIsSign(dailyInfo.is_sign);
      } else {
        try {
          setAccount(accountList[items.account_index]);
          const records = await genshinRecord(cookies, accountList[items.account_index].game_uid);
          if (records.error) {
            setCurrentResin('Please login to hoyolab');
            return;
          }
          const dailyNote = records.dailyNote;
          const dailyInfo = records.dailyInfo;
          setCurrentResin(`${dailyNote.current_resin} / ${dailyNote.max_resin}`);
          setResinRecoveryTime(dailyNote.resin_recovery_time);
          setTotalSignDay(dailyInfo.total_sign_day);
          setIsSign(dailyInfo.is_sign);
        } catch (error) {
          changeAccount(0); // reset to first account
        }

      }
      setIsLoading(false);
    });
  }

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`
  }

  function changeAccount(value) {
    setAccountIndex(Number(value));
    chrome.storage.sync.set({ 'account_index': Number(value) }, function () {
      console.log('Value index is set to ' + Number(value));
    });
    chrome.storage.sync.set({ 'account_uid': accountList[Number(value)].game_uid }, function () {
      console.log('Value uid is set to ' + accountList[Number(value)].game_uid);
    });

    getData(cookies);
  }

  function getDaysInMonth() {
    // Create a new Date object for the current date
    const currentDate = new Date();

    // Get the year and month of the current date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // January is 0, so add 1 to get the current month

    // Create a new Date object for the first day of the next month
    const firstDayOfNextMonth = new Date(year, month, 1);

    // Subtract 1 day from the first day of the next month to get the last day of the current month
    const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);

    // Get the day of the month from the last day of the current month
    const numberOfDaysInCurrentMonth = lastDayOfCurrentMonth.getDate();
    return numberOfDaysInCurrentMonth;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_item1}>
          <p className={styles.title}>Battle Chronicle</p>
          <select className={styles.name} onChange={(e) => changeAccount(e.target.value)} defaultValue={accountIndex}>
            {accountList.map((account, index) => {
              return (
                <option className={styles.title} key={index} value={index}>{account.nickname}</option>
              )
            })}
            {/* <option className={styles.menu} value="0">PEN</option>
            <option className={styles.menu} value="1">Apple</option>
            <option className={styles.menu} value="2">Banana</option>     */}
          </select>
          <p className={styles.level}>Lv. {account.level}</p>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <img src="/icons/fragile-resin-genshin-impact.png" alt="fragile-resin-genshin-impact" width={'30px'} />
            </div>
            <div className={styles.grid_item}>
              <p className={styles.resin}>{current_resin}</p>
            </div>
            <div className={styles.grid_item}>
              <p className={styles.time}>{resin_recovery_time > 0 && toHoursAndMinutes(resin_recovery_time)}</p>
            </div>
          </div>
          {/* <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p> */}
        </div>
        <div className={styles.main_item2}>
          <div className={styles.tool}>
            <div onClick={() => { window.open('https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&mhy_auth_required=true&mhy_presentation_style=fullscreen&utm_source=hoyolab&utm_medium=battlechronicle') }} className={styles.tool_item}>
              Checkin
              { isLoading === false && (is_sign ? 
                <img className={styles.checkin_icon} src="/icons/daily-check.png" alt="You have signed today" width={'30px'} />
                :
                <img className={styles.checkin_icon} src="/icons/daily-uncheck.png" alt="You have not signed today" width={'30px'} />
              )}
              {isLoading === false && (total_sign_day + ' / ' + getDaysInMonth())}
            </div>
            <div className={styles.divider}></div>
            <div onClick={() => { window.open('https://act.hoyolab.com/ys/app/interactive-map/index.html') }} className={styles.tool_item}>
              Teyvat Interactive Map
            </div>
            <div className={styles.divider}></div>
            <div onClick={() => { window.open('https://m.hoyolab.com/#/version?game_id=2&hyl_game_version=3.7&utm_source=tools&utm_medium=battlechronicle') }} className={styles.tool_item}>
              Version Topics Page
            </div>
            <div className={styles.divider}></div>
            <div onClick={() => { window.open('https://genshin.hoyoverse.com/en/gift') }} className={styles.tool_item}>
              Gift Code
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
