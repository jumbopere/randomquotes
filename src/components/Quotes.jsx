import {useState, useEffect} from "react";

const API_URL = import.meta.env.VITE_URL

const Quotes = () => {
  const [quotes, setQuotes]= useState([]);
  const getQuotes = async()=> {
    try{
      const response= await fetch(API_URL);
      const allQuotes = await response.json();
      const quote=Math.floor(Math.random() * allQuotes.length)
      console.log(allQuotes[quote])
      setQuotes(allQuotes[quote]);
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=> {
getQuotes()
  }, [])
  
  return (
    // <div>
    //           <div className="text-center">
    //           <h1 className="text-4xl tracking-tight font-extrabold italic  sm:text-4xl md:text-5xl text-indigo-600">
    //             Random Qoutes
    //           </h1>
    //           </div>

    // </div>
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: 500 }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX17uUAAADyzqXmwZzUsIzyzaL58un17+jlv5j79Ov99u3qxJ7x6uH38urpw5799ezpyqzz17jbt5K1sKnp49ry0qz059jz28DZuJbqzrKEgHvNx8D049D17ODvyaKhnJarpqDY0spcWVb04MkQEA8qKSdCQD5kYV3BvLSUj4rz1LI2NDLg2tFxbmpkWEuii3QcGxoiISFTUE13Z1eNeWWuln7BpIgyLCW+oIJXTULNr5KXk41MSUc7OTcxLy2ymoBEPDNyY1SHdGAqJB1DybRMAAAMt0lEQVR4nNWdaUPiOhSGU4otbQEVEJBNAUFAHNzGUca5jt7//59u0hYo3XvOCfS+32ZUzGOSs2VjimzdTKa3navr+qw7XDYaZcYajeWwO6tfX3Vup5Mb6b+fSfzsh6f7q+6wYZrmqaEJsY3sfxmn/CuNYffq/mkisRWyCD869WXDMA0PVrg4qXnaWNY7H5JaIoPwz3xW1pLZfJxauTv/I6E11IST+3qD91wGOA+mYTbq99QjlpTwrtMtn8LotpSn5W7njrJRhISdLkPiuZAmh6RrFhXhU10Djs1QSEObPRG1jIRw0hmadHgupLmcP1I0joBwel0m53MYy/VpDgg/ZpohAc+RoXXRgxVJOKIfnvvSzOHoiISjrmQ+h7GLYkQQTruZwhYEo9FFhHRgwof6Afpvy3h6DU5CoIRzJs++hMlg84MSjpanB+UTOl3CpiOIsH6gCbgvzagfiPC2fNgBupPB7g9A+DAzj8QnZM4yR3JZCUeNY3WgI6NxK5fwijCBgEkzriUS3g2POUI3MoeZMuQshLflY3egI62cxeBkIPx9FB8RJs34LYPwqDbUL7NLTvi4PK4N9ctYpnUbKQk/GnkZoRtpjZS5cTrCW5Y3QI7I0nnGVISdPE3BncxUNcc0hPN8AqZETEH4+/CZUlqdpkgakwmv8tqDQuYVnjDXgGkQkwh/5xswxUBNICQyMnqYSD6ZIyaYm3hCAjchSJq9cet8cVEonAgVCheL89a413S+iFaCRY0lvEUC6nq/OT6/OHHBPHL+62LR6vXxlGas648j/EDiNceLgh/NJ/7VRauJhowrGMcQPmJiUZ2NF/FwHsqLFq4ntUZMGB5DuIQD6s3zlHgbyEWPIRi1JYRwBk6XsvI5kBcYRmOWnRDsCPU+gM9hbMIRzcisP4rwFjpE9XEBxGcznvfBjEaUQY0gvAMWnfT+AswnEAs9KKJWjqjARRAOgYA9eAe6jC0gIdOGWQiB4bY+RvIJxAUUMSIIDyUcwcyo3sIDCoPTByKehi6/hRE+wFw9DSACUWs8pCSEeUKKIYpEDPWKIYT3oEmo96gABSKMkJkh5f4QwjLow5t0gMIxQp1GGsI6zMxcEAJyxDEMMWQhPEA4OqqV2SE2QYTMCNjTACEoo9BJx6itC1gnBrMMPyGwMEM7RoWg4zRQmfIRPoI+ldKO7gR1/A+xhDAzo9N3oYhQaYzNPuHH0V2hFxHYieY0hrALM6QLGYDgTtRm0YQwT0Hr7L0Cun1tFEkI7EJqX7jRCTAd1rpRhCNgaUaGnbEJobGbOYogBCb20gYp2GHsdaKHEGZICbOmgE56MEJmfoQSwmYh08/lEQKt6Z453RFOofVDWdOQC1yz0f6EEF5Da9zypiE8cvNsYNwSTmCJL2N9iYTQHIqx8mOAcA7dcSEnZHMJwQVicx4ghK40SQpKXUJgCuXNEzeET+CFGHnOAkPIzCcfYR2+EiOTEOoueCfWfYTwxUJZUSmSkGn7hJ2cEoKritxhdPYIgfEMkxrS4Ag3walDeAf+HLmEhQVicb/8j4ewA99+mF9Cd7MUQw7SHBO6w5ShIjb5hPCG8WE62RLeI/bI5pjQWYliKHcvnxC1Vaq+JWwgPkaqPywgvAVXY0P4B7MFMbcen8u8cwnnmOMweSY05i7hDHNcJLdxKXPLNYIQ4Svym1vYKjuEH6gTPznNgB1pHzYhPK+wlWdCsQWc4bwhk1ryRtRpHImSG0PtBRaSWmuDFr1did18THnE+HvZhOBqoqvGAyd8wh4OlQcIXgbeynjihLBNXh5JrOqDa94b8eCbKVfYPpSzxm0Lur9tK+OKEyKyX1sykwtUaiHEoxoGXRfdEcoL25BhKbONKbtBmlKpK6TIoI2rccMm6ONp8oIabEjDZU7YFE0ozyGi3aHYPsSwJ/A4oSzAQoGA8JYhSqUbyXOIWHcoiqYM7Q65u5AFCNxj6pVxxa7R90HI2xOFdhbcXVwzZO7EJObABM6CaXWGKtI4kpUhYrNDm3DGsEEbk2dMCZwF07oMG7QxSVuEBSHBWXZtyJb4T5EVexOYUsb5sGEpkxaZUhgaHpgyVLHUlRxTQxCVcpVJCOVsbaMwNIyGT5apIWkbDaMcU4NaHd2KZpRKMTU0hobzEdhSOaaGIqJhwpYS+EMmJ4HCp05CS4qYRs5ERFcSbfGYhiAulTIRiaYhj0sJcgsmYyISTUOeW+DzQ1vkExG9ZOGI54f4HF+IfiKShN12jo+v0wiRT0SiaSjqNAS1NiHqoilNUGrX2vD1UlvkoSlJq+x6Kb7mbYu44EZRZrNlTgnWLRzR+gsiX2GvW6DXnlzplIBUIZu99oReP3RFO0zRS6OuxPoheg14I8phSlPAYO4aMI1DZLRhDdUgtdfx0XsxXFEOU6pB6uzFQO+n2YhumJJZUmc/DXZP1FZ0Tv+EqEXunigqY0oXm1LFpJt9bdi9iR5RERLFpNu9iWR3ylOlUDT1CyF3fyluj7BXNLaGzBnyUTol2OftFc01LnRduNnnjdur7xXJejedndnt1Uedt9gXRSdSxTOe8xaoMzN7IuhEwi7cnZlBnXvaF97r03l7z7knQo+INqeEhtR7dg1z/tAnrE8kNKTe84eYM6R+4baenCAuvA7Ic4aULAtmSGNDaWb2zgFjznIHhMoTCQH3z3IjzuMHVYEDtiuE7dg7j085TFmlDQWsURLu36mAPb+2p0q7BgMsFSkJffdiKKR9WAQhloqkhL67TSidPieEIKpFUsLA/TTgO4aCEoTZEXkPkhIG7hjCnkL0qHImGlsbZAckJAzeEwW/6ysg/axmNzcLovMThIQhd3090mX6Z6rT3lJavkHR1RmZxw+5rw1+555fnNAZc2lHamkDWCIjDLtzD35vol+cUHVHXdFK0YG1LaBKRqhNQwjJyjWCcIuY2I3bDizWVDLC8LsvofeXBmQTbhHjGXd8ApCMMOL+Uqrg1CHcIRZrUWPVw2cDUhFG3UELvkfYp4pD6EHkUyzYkZb36w6gekbjLSLvESbqxIqqBhH3e3JQ2v+aC6iqJITRd0FD7/P2qV8KRxQgtVKpVAv89xawRFIrjbnPm8Sc6uMtoaoGWEK1/fYSRaUt7k52hWT7UFX1KNhfkR0oVCX4/bH36hMENnqrpGZC3PvuEr4U5QlnwghvsNFppbcPmMRY831zqYc1NuWbWEJsilEZBwDjGP189lTEIQaelqV5Z2aryzDAKMYQPoF4SfuaJdFbQUI666kRgILR7wEjv7WkIl6z1JLfCoI+xKL3x2fRfE7TN5S1aDznG8/GwKdX07z3BFr0rrDeZUz/ZVdJvewxwIQsB3FCCLPtGuZ/6ybvvRIln81Y4j2ZddtJ2NvHqLfzbDreedR0O0r1ctxMP2BDxiji/UNd15u9yyp95/khS1VOmeoF7/TvHyqjBKfI6fqcTl7nBSj5tOwnPscefHMtkjD2HVKd9Xst6X0XQlnllHF9meUd0sjdfOKx9JYEs5Ka8iz6MfZsb8mGvgdcYZzuUCMzmlI9azVDHEnW94B9bzrzvxp3Ccem20hQBhyJlvFNZ8+73FuXkA88V44j2U3L7O9yO17xQC4BJq8jgbytzrMMo3xAlwATb5wwsZVARpGKcJK3kRkhYWInIELlh3XsxqeU9SOGIo5QeR4cu+2pNHiOg4glVF7+D4iDl1iGeML/A2ICYBKhsso74mCVQJBEqPzMN+LgZxJAImG+EQefie1PJszzQE0coukI82tukoxMasK8IqYCTEeoPFvV5F94YFWtWEefkVD5oeYtgrPUuFAtO6Hyt50vRKv9K2XL0xIqD+s8IVrrm+QmZyTMlddI4yUAhMpzTiajVU1nY7IT5mQyWu2/WRqdiTAXIVxyJIoiVL6OPFIt9Stji7MSKr9ej9mNg9e0TgJOKGobx+pGK75eQUaoPL4eJYirDl5TO0EkIZ+NRzCqVvsL1FYYoXKzsg7LaFkrSAfCCW2Lc7ihWh18xtR8JREqyvv6QP1oDdbv8GYiCHlOtT5AP3K+L0wjUYScsS2Z0RoADQwVoT1W5TFa1jplniuRkDN+qnIgLfUTMf8ICbldXbXJ45zqoL3KHKGFiYSQ6+ttQGhZLWvw+kXUMipCHst9r6sko5V/yvolbHcTTHSEXH9fuIvE9ST/+fVLpgw3SaSEXL++36rQ8crHZvXthWTyeURNKPT+suatrWbBrFb5X2W9IjCdAckgFPrx/VpUeWcmzkyOZg3U4us32vFFSBah0J/3559v7epAgFrVfVTRaRxtUG2/fX6/k048n2QS2rp5+Pf9+2W1el2321u+dnv9ulq9fL//+wDMidLrP7Qhc+LoP9C7AAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-md text-gray-600 text-center px-5">
         {quotes.text}
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
           {quotes.author}
          </p>
        </div>
        
        <button className="bg-indigo-500 float-right  mt-10 w-20 font-bold justify-between cursor-pointer rounded" onClick={getQuotes}> Next</button>
       
    
      </div>
    </div>
  );
};

export default Quotes;
