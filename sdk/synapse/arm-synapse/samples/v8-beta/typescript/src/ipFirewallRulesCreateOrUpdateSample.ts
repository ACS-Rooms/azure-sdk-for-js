/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  IpFirewallRuleInfo,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a firewall rule
 *
 * @summary Creates or updates a firewall rule
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateIpFirewallRule.json
 */
async function createAnIPFirewallRule() {
  const subscriptionId = "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const ruleName = "ExampleIpFirewallRule";
  const ipFirewallRuleInfo: IpFirewallRuleInfo = {
    endIpAddress: "10.0.0.254",
    startIpAddress: "10.0.0.0"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.ipFirewallRules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    ruleName,
    ipFirewallRuleInfo
  );
  console.log(result);
}

createAnIPFirewallRule().catch(console.error);
