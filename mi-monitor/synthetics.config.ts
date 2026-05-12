import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://elastic.github.io/synthetics-demo/',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 10,
      locations: [],
      privateLocations: ['AGENTE-SONDAS-K8s'],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'mi-monitor',
      url: 'https://ejie-observability.kb.northeurope.azure.elastic-cloud.com/',
      space: 'default',
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
