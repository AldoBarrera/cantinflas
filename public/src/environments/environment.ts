import { KeycloakConfig } from 'keycloak-angular';

let Credentials = {
  secret: "7c38dbdb-bbc5-400e-9d8c-66b5f78c39f2"
};

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'cantinflas',
  clientId: 'cantinflas',
  credentials: Credentials
};

let appConfig = {
  url: 'http://localhost:3101'
};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
  appConfig: appConfig
};


