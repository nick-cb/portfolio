const TechCard: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <li className="flex items-center gap-2 bg-teal-400/[0.16] rounded-lg py-1 px-2">
      {children}
    </li>
  );
};

const React = () => {
  return (
    <TechCard>
      <span>
        <svg
          strokeWidth="0"
          viewBox="0 0 512 512"
          focusable="false"
          className="fill-blue-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
        </svg>
      </span>
      <span className="text-teal-600 font-semibold pt-[2px]">React</span>
    </TechCard>
  );
};

const MaterialUi = () => {
  return (
    <TechCard>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="19"
          viewBox="0 0 36 32"
          // fill="none"
          className="fill-blue-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
            fill="#007FFF"
          ></path>
        </svg>
      </span>
      <span className="text-teal-600 font-semibold pt-[2px]">Material Ui</span>
    </TechCard>
  );
};

const Nodejs = () => {
  return (
    <TechCard>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 256 282"
        >
          <g fill="#8CC84B">
            <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
            <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
          </g>
        </svg>
      </span>
      <span className="text-teal-600 font-semibold pt-[2px]">Nodejs</span>
    </TechCard>
  );
};

const Mongodb = () => {
  return (
    <TechCard>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFF"
            d="M12.546,24l-0.639-0.219c0,0,0.078-3.257-1.091-3.49c-0.78-0.904,0.125-38.338,2.93-0.125c0,0-0.966,0.484-1.138,1.31C12.422,22.286,12.546,24,12.546,24L12.546,24z"
          />
          <path
            fill="#A6A385"
            d="M12.546,24l-0.639-0.219c0,0,0.078-3.257-1.091-3.49c-0.78-0.904,0.125-38.338,2.93-0.125c0,0-0.966,0.484-1.138,1.31C12.422,22.286,12.546,24,12.546,24L12.546,24z"
          />
          <path
            fill="#FFF"
            d="M12.889,20.852c0,0,5.595-3.678,4.285-11.33c-1.262-5.562-4.238-7.387-4.566-8.088c-0.359-0.498-0.701-1.371-0.701-1.371l0.234,15.474C12.142,15.552,11.658,20.275,12.889,20.852L12.889,20.852L12.889,20.852z"
          />
          <path
            fill="#499D4A"
            d="M12.889,20.852c0,0,5.595-3.678,4.285-11.33c-1.262-5.562-4.238-7.387-4.566-8.088c-0.359-0.498-0.701-1.371-0.701-1.371l0.234,15.474C12.142,15.552,11.658,20.275,12.889,20.852L12.889,20.852L12.889,20.852z"
          />
          <path
            fill="#FFF"
            d="M11.58,21.055c0,0-5.252-3.585-4.94-9.896c0.296-6.311,4.006-9.413,4.722-9.974C11.829,0.685,11.845,0.499,11.876,0c0.328,0.701,0.266,10.488,0.312,11.641C12.328,16.083,11.938,20.213,11.58,21.055L11.58,21.055z"
          />
          <path
            fill="#58AA50"
            d="M11.58,21.055c0,0-5.252-3.585-4.94-9.896c0.296-6.311,4.006-9.413,4.722-9.974C11.829,0.685,11.845,0.499,11.876,0c0.328,0.701,0.266,10.488,0.312,11.641C12.328,16.083,11.938,20.213,11.58,21.055L11.58,21.055z"
          />
          <path
            fill="#918E74"
            d="M12,18.545c-0.119,1.256-0.272,2.162-0.42,2.509c0,0-0.024-0.016-0.069-0.049c0.368,0.862,0.397,2.234,0.397,2.651c0,0.079-0.001,0.124-0.001,0.124l0,0L12,23.813V18.545L12,18.545z"
          />
          <path
            fill="#408940"
            d="M11.907,0.063L11.907,0.063l0,0.039C11.943,0.255,11.974,0.525,12,0.884V0.286C11.942,0.15,11.907,0.063,11.907,0.063L11.907,0.063z"
          />
          <path
            fill="#4D9446"
            d="M11.876,0c-0.031,0.499-0.047,0.685-0.514,1.184c-0.717,0.561-4.427,3.662-4.722,9.974c-0.009,0.185-0.014,0.367-0.013,0.548c0.005,5.971,4.954,9.349,4.954,9.349c0.148-0.347,0.301-1.253,0.42-2.509V0.884c-0.026-0.359-0.057-0.629-0.092-0.781l0,0C11.898,0.058,11.887,0.024,11.876,0L11.876,0z"
          />
        </svg>
      </span>
      <span className="text-teal-600 font-semibold pt-[2px]">Mongodb</span>
    </TechCard>
  );
};

export default Object.assign(TechCard, {
  React,
  MaterialUi,
  Nodejs,
  Mongodb,
});
