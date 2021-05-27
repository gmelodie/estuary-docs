import styles from "~/components/App.module.scss";

import * as React from "react";

import App from "~/components/App";

const markdown = `# WIP

This page has not been completed yet.
`;
const code = null;
const curl = null;

function APIPublicMinerStats(props) {
  return (
    <App
      title="Estuary Documentation: API: /public/miners/stats"
      description="https://api.estuary.tech/public/miners/stats:miner"
      url="https://docs.estuary.tech/api-public-miners-stats"
      curl={curl}
      markdown={markdown}
      code={code}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APIPublicMinerStats;
