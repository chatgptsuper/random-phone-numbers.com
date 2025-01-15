// 这个组件可以是服务端组件，因为：
// 1. 只渲染静态 SVG
// 2. 不包含任何交互逻辑或状态
export default function HeaderLogo() {
  return (
    <div role="img" aria-label="Random Phone Number Generator Logo">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 272.03 216.41"
        aria-hidden="true"
        role="presentation"
        title="Phone Number Generator Logo"
      >
        <desc>A stylized phone icon representing the Random Phone Number Generator tool</desc>
        <g>
          <path
            className="fill-secondary"
            d="M212.81,37.86l3.28,3.28c3.5,3.5,6.26,7.61,8.14,12.11,34.31,11.32,20.82,32.07,2.98,46.93-1.32,1.1-2.66,2.16-4,3.19-3.03,2.32-6.1,4.44-9,6.3-2.08,1.34-4.08,2.53-5.91,3.57-1,.57-2.03,1.13-3.09,1.69-3.17,1.7-6.59,3.38-10.22,5.05-2.87,1.31-5.88,2.61-9,3.9-2.91,1.19-5.91,2.36-9,3.5-1.61.6-3.24,1.2-4.9,1.78-2.94,1.04-5.94,2.05-9,3.02-5.21,1.68-10.57,3.25-16,4.71-2.98.79-5.98,1.56-9,2.28-.75.17-1.5.35-2.25.53-2.99.69-6,1.34-9,1.94-5.36,1.08-10.71,2.01-16,2.76-3.03.43-6.03.81-9,1.12-1.64.17-3.28.33-4.9.46-3.04.25-6.05.44-9,.54-3.07.12-6.07.15-9,.09-3.52-.06-6.94-.25-10.22-.58-3.13-.31-6.13-.74-9-1.31-1.2-.23-2.38-.49-3.53-.77-1.92-.47-3.75-1-5.47-1.6-1.41-.48-2.74-1-4-1.57-16.05-7.11-20.26-20.4-4.52-37.54,1.51-1.65,3.05-2.96,4.52-4.1v-16.83c-70.63,48.12-54.5,95,4,99.29,2.9.22,5.9.33,9,.33,2.91,0,5.91-.09,9-.3.13,0,.27,0,.41-.02,3.15-.21,6.54-.55,10.13-1.02,2.84-.37,5.81-.81,8.9-1.33,2.86-.48,5.82-1.03,8.86-1.63,1.58-.32,3.19-.65,4.82-.99,2.93-.63,5.94-1.31,9-2.04,5.19-1.23,10.55-2.61,16-4.12,2.97-.82,5.98-1.68,9-2.57.75-.22,1.5-.45,2.25-.67,2.98-.9,5.99-1.83,9-2.8,5.32-1.71,10.67-3.51,16-5.41,3.01-1.08,6.02-2.18,9-3.3,1.64-.62,3.27-1.25,4.9-1.88,3.03-1.18,6.03-2.39,9-3.62,3.04-1.25,6.04-2.53,9-3.83,3.47-1.53,6.88-3.09,10.22-4.68,3.07-1.46,6.07-2.94,9-4.45,3.09-1.58,6.09-3.19,9-4.81,13.82-7.73,25.51-15.93,33.58-24.26,41.72-43.08-12-67.72-43.98-70.34Z"
            aria-hidden="true"
          />
          <path
            className="fill-secondary"
            d="M199.82,157.39c-3.16,1.38-6.27,2.71-9.24,3.93-1.55.64-3.08,1.26-4.59,1.88v9.41h-22.9v-.86c-3.97,1.38-8.1,2.76-12.32,4.11-1.18.38-2.4.77-3.68,1.17v19.68h-20.25v-13.8c-4.48,1.22-8.92,2.34-13.22,3.36-.92.22-1.85.44-2.78.65v9.79h-2.47c-5.76,0-10.97-2.39-14.68-6.23-1.22.21-2.4.42-3.54.61-3.12.53-6.26,1-9.33,1.4-3.8.5-7.46.86-10.86,1.09-.16.01-.4.03-.68.04-3.08.21-6.26.31-9.44.31,1.24,12.62,11.88,22.48,24.84,22.48h104.58c13.78,0,24.95-11.17,24.95-24.95v-40.77c-1.26.63-2.54,1.24-3.84,1.86-3.39,1.62-6.93,3.24-10.55,4.84ZM165.56,196.71h-2.47v-13.12h21.53c-2.94,7.67-10.36,13.12-19.06,13.12Z"
            aria-hidden="true"
          />
          <path
            className="fill-secondary"
            d="M62.02,132.94h.04c2.41.49,5.05.87,7.86,1.15,2.89.29,6,.47,9.27.52.89.02,1.79.03,2.7.03,1.82,0,3.7-.04,5.58-.11h.06c.14,0,.27-.01.41-.02v-15.12h22.9v12.89c4.4-.66,8.98-1.47,13.65-2.41.78-.15,1.56-.31,2.35-.48v-49.1h20.25v44.16c4.27-1.19,8.4-2.43,12.32-3.69h.03s.02-.02.02-.02c1.2-.38,2.41-.77,3.63-1.18v-39.27h2.47c11.28,0,20.43,9.14,20.43,20.42v10.14c1.39-.6,2.72-1.2,3.98-1.77,3.53-1.63,6.75-3.21,9.57-4.73h.03s.03-.03.03-.03c1.04-.55,1.94-1.04,2.77-1.51,1.91-1.09,3.66-2.14,5.36-3.24,2.25-1.44,4.42-2.93,6.48-4.45v-27.14c0-1.78-.19-3.54-.57-5.25-.99-4.66-3.32-8.98-6.74-12.4l-24.51-24.51-18.51-18.51c-4.68-4.68-11.03-7.31-17.65-7.31h-61.55c-13.79,0-24.96,11.17-24.96,24.96v107.49c.77.19,1.53.34,2.26.48h.04ZM87.94,100.71c0-11.28,9.15-20.42,20.43-20.42h2.47v28.12h-22.9v-7.7Z"
            aria-hidden="true"
          />
        </g>
      </svg>
    </div>
  );
}
