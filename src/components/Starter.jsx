import React, { useEffect, useState } from "react";
import { FaLink, FaCheck, FaCopy } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
import { useLazyGetSummaryQuery } from "../services/article";
import { toast } from "react-hot-toast";

const Starter = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="max-w-4xl w-full m-auto px-2 ">
      {/* Search */}
      <div className="mb-16 ">
        <div>
          <form className=" max-w-xl m-auto" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-purple-500 py-2 mx-1">
              <input
                className=" peer appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="url"
                placeholder="Link to Summarize"
                value={article.url}
                onChange={(e) =>
                  setArticle({ ...article, url: e.target.value })
                }
                required
              />

              <button
                type="submit"
                className="flex-shrink-0  bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded peer-focus:border-purple-700 peer-focus:bg-purple-700 peer-focus:font-bold"
              >
                <FaLink className=" inline-block mr-1" />
                Summarize
              </button>
            </div>
          </form>
          {/* Browse URL history */}
          <div className="flex flex-col gap-1 mt-3  max-h-60 overflow-y-auto">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="bg-gray-50 border cursor-pointer hover:bg-slate-200 border-gray-300 text-sm rounded-lg block w-full pl-10 p-2.5 relative"
              >
                <FaCopy
                  className=" align-baseline fill-orange-300 cursor-pointer  absolute left-3"
                  onClick={() => handleCopy(item.url)}
                />
                <p className=" flex-1  font-rubik text-purple-400  font-medium text-sm truncate mr-2 ">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Display Results */}
        <div className="my-10 max-w-full flex justify-center items-center">
          {isFetching ? (
            <SyncLoader color="purple" />
          ) : error ? (
            <p className=" font-playfair font-extrabold text-purple-500 text-3xl text-center">
              Oops! Failed to load <br />{" "}
              <span className=" font-rubik font-bold text-orange-300 text-lg text-center">
                {error?.data?.error}
              </span>{" "}
            </p>
          ) : (
            article.summary && (
              <div className=" flex flex-col gap-3">
                <h2 className=" font-rubik font-bold  text-gray-600 text-xl text-center ">
                  Article{" "}
                  <span className=" font-bold text-gradient bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-transparent bg-clip-text text-center">
                    Summary
                  </span>{" "}
                </h2>
                <div className=" bg-slate-50 p-5 shadow-md">
                  <p className=" font-rubik text-center">{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Starter;
