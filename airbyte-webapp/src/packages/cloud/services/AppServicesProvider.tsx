import React from "react";

import { ServicesProvider } from "core/servicesProvider";

import { CloudAuthService } from "./auth/CloudAuthService";
import { KeycloakService } from "./auth/KeycloakService";
import { FirebaseSdkProvider } from "./FirebaseSdkProvider";

/**
 * This Provider is main services entrypoint
 * It initializes all required services for app to work
 * and also adds all overrides of hooks/services
 */
const AppServicesProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ServicesProvider>
      <FirebaseSdkProvider>
        <KeycloakService>
          <CloudAuthService>{children}</CloudAuthService>
        </KeycloakService>
      </FirebaseSdkProvider>
    </ServicesProvider>
  );
};

export { AppServicesProvider };
