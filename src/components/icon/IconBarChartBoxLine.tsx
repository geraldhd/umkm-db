// icon:bar-chart-box-line | Remix Icon https://remixicon.com/ | Remix Design
import * as React from "react";

function IconBarChartBoxLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="20px"
      width="20px"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4zm3 8h2v4H7v-4zm4-6h2v10h-2V7zm4 3h2v7h-2v-7z" />
    </svg>
  );
}

export default IconBarChartBoxLine;
