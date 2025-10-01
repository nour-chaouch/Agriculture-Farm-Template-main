import React from 'react'

const ButtonSection = ({page,handclick1,handclick2}) => {
  return (
    <>
    <section className="flex content-center justify-center gap-1 my-14">
    <button
      onClick={handclick1}
      className={
        page !== 2
          ? `hidden`
          : `text-green-900 hover:text-white border border-gray-400 hover:bg-green-900 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </button>

    <button
      onClick={handclick1}
      type="button"
      style={{
        backgroundColor: page === 1 ? "rgb(20 83 45)" : "",
        color: page === 1 ? "white" : "",
      }}
      className={`text-green-900 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
        page === 1
          ? "!hover:bg-green-900"
          : "text-green-900 hover:text-white hover:bg-green-900"
      }`}
    >
      1
    </button>

    <button
      onClick={handclick2}
      type="button"
      style={{
        backgroundColor: page === 2 ? "rgb(20 83 45)" : "",
        color: page === 2 ? "white" : "",
      }}
      className={`text-green-900 border border-gray-400 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 ${
        page === 2
          ? "!hover:bg-green-900"
          : "text-green-900 hover:text-white hover:bg-green-900"
      }`}
    >
      2
    </button>

    <button
      onClick={handclick2}
      type="button"
      className={
        page === 2
          ? `hidden`
          : `text-green-900 hover:text-white border border-gray-400 hover:bg-green-900 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </section>
  </>
  )
}

export default ButtonSection