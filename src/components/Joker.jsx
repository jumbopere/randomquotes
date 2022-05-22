import { useEffect, useState } from "react";
import { Data } from "../data";
import { Helmet } from "react-helmet";

const Joker = () => {
  const [quote, setQuote] = useState([]);
  const getQuotes = () => {
    const ran = Math.floor(Math.random() * Data.length);

    setQuote(Data[ran]);
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Joker Quotes </title>
      </Helmet> */}

      <div className="min-w-screen min-h-screen bg-slate-900 flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
          style={{ maxWidth: 500 }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-md text-gray-600 text-center px-5">
              {quote.quote}
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              The Joker
            </p>
          </div>

          <button
            className="bg-indigo-500 float-right  mt-10 w-20 font-bold justify-between cursor-pointer rounded"
            onClick={getQuotes}
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Joker;
