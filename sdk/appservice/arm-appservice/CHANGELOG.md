# Release History

## 13.0.3 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 13.0.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 13.0.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 13.0.0 (2022-07-06)
    
**Features**

  - Added operation group WorkflowRunActionRepetitions
  - Added operation group WorkflowRunActionRepetitionsRequestHistories
  - Added operation group WorkflowRunActions
  - Added operation group WorkflowRunActionScopeRepetitions
  - Added operation group WorkflowRuns
  - Added operation group Workflows
  - Added operation group WorkflowTriggerHistories
  - Added operation group WorkflowTriggers
  - Added operation group WorkflowVersions
  - Added operation AppServiceEnvironments.beginUpgrade
  - Added operation AppServiceEnvironments.beginUpgradeAndWait
  - Added operation AppServiceEnvironments.deleteAseCustomDnsSuffixConfiguration
  - Added operation AppServiceEnvironments.getAseCustomDnsSuffixConfiguration
  - Added operation AppServiceEnvironments.testUpgradeAvailableNotification
  - Added operation AppServiceEnvironments.updateAseCustomDnsSuffixConfiguration
  - Added operation StaticSites.beginLinkBackend
  - Added operation StaticSites.beginLinkBackendAndWait
  - Added operation StaticSites.beginLinkBackendToBuild
  - Added operation StaticSites.beginLinkBackendToBuildAndWait
  - Added operation StaticSites.beginValidateBackend
  - Added operation StaticSites.beginValidateBackendAndWait
  - Added operation StaticSites.beginValidateBackendForBuild
  - Added operation StaticSites.beginValidateBackendForBuildAndWait
  - Added operation StaticSites.getLinkedBackend
  - Added operation StaticSites.getLinkedBackendForBuild
  - Added operation StaticSites.listLinkedBackends
  - Added operation StaticSites.listLinkedBackendsForBuild
  - Added operation StaticSites.unlinkBackend
  - Added operation StaticSites.unlinkBackendFromBuild
  - Added operation WebApps.beginGetProductionSiteDeploymentStatus
  - Added operation WebApps.beginGetProductionSiteDeploymentStatusAndWait
  - Added operation WebApps.beginGetSlotSiteDeploymentStatusSlot
  - Added operation WebApps.beginGetSlotSiteDeploymentStatusSlotAndWait
  - Added operation WebApps.createOneDeployOperation
  - Added operation WebApps.getAuthSettingsV2WithoutSecretsSlot
  - Added operation WebApps.getOneDeployStatus
  - Added operation WebApps.listProductionSiteDeploymentStatuses
  - Added operation WebApps.listSlotSiteDeploymentStatusesSlot
  - Added Interface AddressResponse
  - Added Interface AnalysisDefinition
  - Added Interface ApiKVReference
  - Added Interface ApplicationStackResource
  - Added Interface AppServiceCertificateOrder
  - Added Interface AppServiceCertificateOrderPatchResource
  - Added Interface AppServiceCertificatePatchResource
  - Added Interface AppServiceCertificateResource
  - Added Interface AppServiceEnvironmentPatchResource
  - Added Interface AppServiceEnvironmentResource
  - Added Interface AppServiceEnvironmentsDeleteAseCustomDnsSuffixConfigurationOptionalParams
  - Added Interface AppServiceEnvironmentsGetAseCustomDnsSuffixConfigurationOptionalParams
  - Added Interface AppServiceEnvironmentsTestUpgradeAvailableNotificationOptionalParams
  - Added Interface AppServiceEnvironmentsUpdateAseCustomDnsSuffixConfigurationOptionalParams
  - Added Interface AppServiceEnvironmentsUpgradeOptionalParams
  - Added Interface AppServicePlan
  - Added Interface AppServicePlanPatchResource
  - Added Interface AseV3NetworkingConfiguration
  - Added Interface AzureResourceErrorInfo
  - Added Interface AzureStoragePropertyDictionaryResource
  - Added Interface BackupItem
  - Added Interface BackupRequest
  - Added Interface BillingMeter
  - Added Interface Certificate
  - Added Interface CertificateEmail
  - Added Interface CertificateOrderAction
  - Added Interface CertificatePatchResource
  - Added Interface ConnectionStringDictionary
  - Added Interface ContainerApp
  - Added Interface ContentHash
  - Added Interface ContentLink
  - Added Interface ContinuousWebJob
  - Added Interface Correlation
  - Added Interface CsmDeploymentStatus
  - Added Interface CsmDeploymentStatusCollection
  - Added Interface CsmPublishingCredentialsPoliciesEntity
  - Added Interface CustomDnsSuffixConfiguration
  - Added Interface CustomHostnameAnalysisResult
  - Added Interface CustomHostnameSites
  - Added Interface DeletedAppRestoreRequest
  - Added Interface DeletedSite
  - Added Interface Deployment
  - Added Interface DetectorDefinitionResource
  - Added Interface DetectorResponse
  - Added Interface DiagnosticAnalysis
  - Added Interface DiagnosticCategory
  - Added Interface DiagnosticDetectorResponse
  - Added Interface Domain
  - Added Interface DomainOwnershipIdentifier
  - Added Interface DomainPatchResource
  - Added Interface ErrorInfo
  - Added Interface ErrorProperties
  - Added Interface ErrorResponse
  - Added Interface Expression
  - Added Interface ExpressionRoot
  - Added Interface ExpressionTraces
  - Added Interface FlowAccessControlConfiguration
  - Added Interface FlowAccessControlConfigurationPolicy
  - Added Interface FlowEndpoints
  - Added Interface FlowEndpointsConfiguration
  - Added Interface FunctionAppStack
  - Added Interface FunctionEnvelope
  - Added Interface GeoRegion
  - Added Interface HostNameBinding
  - Added Interface HybridConnection
  - Added Interface HybridConnectionKey
  - Added Interface HybridConnectionLimits
  - Added Interface Identifier
  - Added Interface IpAddress
  - Added Interface IpAddressRange
  - Added Interface JsonSchema
  - Added Interface KubeEnvironment
  - Added Interface KubeEnvironmentPatchResource
  - Added Interface MigrateMySqlRequest
  - Added Interface MigrateMySqlStatus
  - Added Interface MSDeploy
  - Added Interface MSDeployLog
  - Added Interface MSDeployStatus
  - Added Interface NetworkFeatures
  - Added Interface OpenAuthenticationAccessPolicies
  - Added Interface OpenAuthenticationAccessPolicy
  - Added Interface OpenAuthenticationPolicyClaim
  - Added Interface OperationResult
  - Added Interface OperationResultProperties
  - Added Interface PremierAddOn
  - Added Interface PremierAddOnOffer
  - Added Interface PremierAddOnPatchResource
  - Added Interface PrivateAccess
  - Added Interface PrivateLinkConnectionApprovalRequestResource
  - Added Interface ProcessInfo
  - Added Interface ProcessModuleInfo
  - Added Interface ProcessThreadInfo
  - Added Interface PublicCertificate
  - Added Interface PushSettings
  - Added Interface Recommendation
  - Added Interface RecommendationRule
  - Added Interface RecurrenceSchedule
  - Added Interface RecurrenceScheduleOccurrence
  - Added Interface RegenerateActionParameter
  - Added Interface ReissueCertificateOrderRequest
  - Added Interface RelayServiceConnectionEntity
  - Added Interface RemotePrivateEndpointConnection
  - Added Interface RemotePrivateEndpointConnectionARMResource
  - Added Interface RenewCertificateOrderRequest
  - Added Interface RepetitionIndex
  - Added Interface Request_2
  - Added Interface RequestHistory
  - Added Interface RequestHistoryListResult
  - Added Interface RequestHistoryProperties
  - Added Interface ResourceHealthMetadata
  - Added Interface ResourceMetricDefinition
  - Added Interface ResourceReference
  - Added Interface Response_2
  - Added Interface RestoreRequest
  - Added Interface RetryHistory
  - Added Interface Revision
  - Added Interface RunActionCorrelation
  - Added Interface RunCorrelation
  - Added Interface Site
  - Added Interface SiteAuthSettings
  - Added Interface SiteAuthSettingsV2
  - Added Interface SiteConfigResource
  - Added Interface SiteConfigurationSnapshotInfo
  - Added Interface SiteExtensionInfo
  - Added Interface SiteLogsConfig
  - Added Interface SitePatchResource
  - Added Interface SitePhpErrorLogFlag
  - Added Interface SiteSourceControl
  - Added Interface SlotConfigNamesResource
  - Added Interface SlotDifference
  - Added Interface Snapshot
  - Added Interface SnapshotRestoreRequest
  - Added Interface SourceControl
  - Added Interface StaticSiteARMResource
  - Added Interface StaticSiteBuildARMResource
  - Added Interface StaticSiteCustomDomainOverviewARMResource
  - Added Interface StaticSiteCustomDomainRequestPropertiesARMResource
  - Added Interface StaticSiteFunctionOverviewARMResource
  - Added Interface StaticSiteLinkedBackend
  - Added Interface StaticSiteLinkedBackendARMResource
  - Added Interface StaticSiteLinkedBackendsCollection
  - Added Interface StaticSitePatchResource
  - Added Interface StaticSiteResetPropertiesARMResource
  - Added Interface StaticSitesGetLinkedBackendForBuildOptionalParams
  - Added Interface StaticSitesGetLinkedBackendOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsForBuildNextOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsForBuildOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsNextOptionalParams
  - Added Interface StaticSitesGetLinkedBackendsOptionalParams
  - Added Interface StaticSitesLinkBackendOptionalParams
  - Added Interface StaticSitesLinkBackendToBuildOptionalParams
  - Added Interface StaticSitesUnlinkBackendFromBuildOptionalParams
  - Added Interface StaticSitesUnlinkBackendOptionalParams
  - Added Interface StaticSitesValidateBackendForBuildOptionalParams
  - Added Interface StaticSitesValidateBackendOptionalParams
  - Added Interface StaticSitesWorkflowPreview
  - Added Interface StaticSitesWorkflowPreviewRequest
  - Added Interface StaticSiteUserARMResource
  - Added Interface StaticSiteUserInvitationRequestResource
  - Added Interface StaticSiteUserInvitationResponseResource
  - Added Interface StaticSiteUserProvidedFunctionApp
  - Added Interface StaticSiteUserProvidedFunctionAppARMResource
  - Added Interface StaticSiteZipDeploymentARMResource
  - Added Interface StorageMigrationOptions
  - Added Interface StorageMigrationResponse
  - Added Interface StringDictionary
  - Added Interface StringList
  - Added Interface SubResource
  - Added Interface SwiftVirtualNetwork
  - Added Interface TopLevelDomain
  - Added Interface TriggeredJobHistory
  - Added Interface TriggeredWebJob
  - Added Interface Usage
  - Added Interface User
  - Added Interface VnetGateway
  - Added Interface VnetInfoResource
  - Added Interface VnetParameters
  - Added Interface VnetRoute
  - Added Interface VnetValidationFailureDetails
  - Added Interface VnetValidationTestFailure
  - Added Interface WebAppsCreateOneDeployOperationOptionalParams
  - Added Interface WebAppsGetAuthSettingsV2WithoutSecretsSlotOptionalParams
  - Added Interface WebAppsGetOneDeployStatusOptionalParams
  - Added Interface WebAppsGetProductionSiteDeploymentStatusOptionalParams
  - Added Interface WebAppsGetSlotSiteDeploymentStatusSlotOptionalParams
  - Added Interface WebAppsListProductionSiteDeploymentStatusesNextOptionalParams
  - Added Interface WebAppsListProductionSiteDeploymentStatusesOptionalParams
  - Added Interface WebAppsListSlotSiteDeploymentStatusesSlotNextOptionalParams
  - Added Interface WebAppsListSlotSiteDeploymentStatusesSlotOptionalParams
  - Added Interface WebAppStack
  - Added Interface WebJob
  - Added Interface WebSiteInstanceStatus
  - Added Interface WorkerPoolResource
  - Added Interface Workflow
  - Added Interface WorkflowFilter
  - Added Interface WorkflowListResult
  - Added Interface WorkflowOutputParameter
  - Added Interface WorkflowParameter
  - Added Interface WorkflowResource
  - Added Interface WorkflowRun
  - Added Interface WorkflowRunAction
  - Added Interface WorkflowRunActionFilter
  - Added Interface WorkflowRunActionListResult
  - Added Interface WorkflowRunActionRepetitionDefinition
  - Added Interface WorkflowRunActionRepetitionDefinitionCollection
  - Added Interface WorkflowRunActionRepetitionProperties
  - Added Interface WorkflowRunActionRepetitionsGetOptionalParams
  - Added Interface WorkflowRunActionRepetitionsListExpressionTracesNextOptionalParams
  - Added Interface WorkflowRunActionRepetitionsListExpressionTracesOptionalParams
  - Added Interface WorkflowRunActionRepetitionsListNextOptionalParams
  - Added Interface WorkflowRunActionRepetitionsListOptionalParams
  - Added Interface WorkflowRunActionRepetitionsRequestHistoriesGetOptionalParams
  - Added Interface WorkflowRunActionRepetitionsRequestHistoriesListNextOptionalParams
  - Added Interface WorkflowRunActionRepetitionsRequestHistoriesListOptionalParams
  - Added Interface WorkflowRunActionScopeRepetitionsGetOptionalParams
  - Added Interface WorkflowRunActionScopeRepetitionsListNextOptionalParams
  - Added Interface WorkflowRunActionScopeRepetitionsListOptionalParams
  - Added Interface WorkflowRunActionsGetOptionalParams
  - Added Interface WorkflowRunActionsListExpressionTracesNextOptionalParams
  - Added Interface WorkflowRunActionsListExpressionTracesOptionalParams
  - Added Interface WorkflowRunActionsListNextOptionalParams
  - Added Interface WorkflowRunActionsListOptionalParams
  - Added Interface WorkflowRunFilter
  - Added Interface WorkflowRunListResult
  - Added Interface WorkflowRunsCancelOptionalParams
  - Added Interface WorkflowRunsGetOptionalParams
  - Added Interface WorkflowRunsListNextOptionalParams
  - Added Interface WorkflowRunsListOptionalParams
  - Added Interface WorkflowRunTrigger
  - Added Interface WorkflowSku
  - Added Interface WorkflowsRegenerateAccessKeyOptionalParams
  - Added Interface WorkflowsValidateOptionalParams
  - Added Interface WorkflowTrigger
  - Added Interface WorkflowTriggerCallbackUrl
  - Added Interface WorkflowTriggerFilter
  - Added Interface WorkflowTriggerHistoriesGetOptionalParams
  - Added Interface WorkflowTriggerHistoriesListNextOptionalParams
  - Added Interface WorkflowTriggerHistoriesListOptionalParams
  - Added Interface WorkflowTriggerHistoriesResubmitOptionalParams
  - Added Interface WorkflowTriggerHistory
  - Added Interface WorkflowTriggerHistoryFilter
  - Added Interface WorkflowTriggerHistoryListResult
  - Added Interface WorkflowTriggerListCallbackUrlQueries
  - Added Interface WorkflowTriggerListResult
  - Added Interface WorkflowTriggerRecurrence
  - Added Interface WorkflowTriggersGetOptionalParams
  - Added Interface WorkflowTriggersGetSchemaJsonOptionalParams
  - Added Interface WorkflowTriggersListCallbackUrlOptionalParams
  - Added Interface WorkflowTriggersListNextOptionalParams
  - Added Interface WorkflowTriggersListOptionalParams
  - Added Interface WorkflowTriggersRunOptionalParams
  - Added Interface WorkflowVersion
  - Added Interface WorkflowVersionListResult
  - Added Interface WorkflowVersionsGetOptionalParams
  - Added Interface WorkflowVersionsListNextOptionalParams
  - Added Interface WorkflowVersionsListOptionalParams
  - Added Type Alias AppServiceEnvironmentsDeleteAseCustomDnsSuffixConfigurationResponse
  - Added Type Alias AppServiceEnvironmentsGetAseCustomDnsSuffixConfigurationResponse
  - Added Type Alias AppServiceEnvironmentsUpdateAseCustomDnsSuffixConfigurationResponse
  - Added Type Alias CustomDnsSuffixProvisioningState
  - Added Type Alias DayOfWeek
  - Added Type Alias DaysOfWeek
  - Added Type Alias DeploymentBuildStatus
  - Added Type Alias Enum14
  - Added Type Alias KeyType_2
  - Added Type Alias Kind
  - Added Type Alias OpenAuthenticationProviderType
  - Added Type Alias ParameterType
  - Added Type Alias RecurrenceFrequency
  - Added Type Alias ResourceNotRenewableReason
  - Added Type Alias StaticSitesGetLinkedBackendForBuildResponse
  - Added Type Alias StaticSitesGetLinkedBackendResponse
  - Added Type Alias StaticSitesGetLinkedBackendsForBuildNextResponse
  - Added Type Alias StaticSitesGetLinkedBackendsForBuildResponse
  - Added Type Alias StaticSitesGetLinkedBackendsNextResponse
  - Added Type Alias StaticSitesGetLinkedBackendsResponse
  - Added Type Alias StaticSitesLinkBackendResponse
  - Added Type Alias StaticSitesLinkBackendToBuildResponse
  - Added Type Alias UpgradeAvailability
  - Added Type Alias UpgradePreference
  - Added Type Alias WebAppsCreateOneDeployOperationResponse
  - Added Type Alias WebAppsGetAuthSettingsV2WithoutSecretsSlotResponse
  - Added Type Alias WebAppsGetOneDeployStatusResponse
  - Added Type Alias WebAppsGetProductionSiteDeploymentStatusResponse
  - Added Type Alias WebAppsGetSlotSiteDeploymentStatusSlotResponse
  - Added Type Alias WebAppsListProductionSiteDeploymentStatusesNextResponse
  - Added Type Alias WebAppsListProductionSiteDeploymentStatusesResponse
  - Added Type Alias WebAppsListSlotSiteDeploymentStatusesSlotNextResponse
  - Added Type Alias WebAppsListSlotSiteDeploymentStatusesSlotResponse
  - Added Type Alias WorkflowProvisioningState
  - Added Type Alias WorkflowRunActionRepetitionsGetResponse
  - Added Type Alias WorkflowRunActionRepetitionsListExpressionTracesNextResponse
  - Added Type Alias WorkflowRunActionRepetitionsListExpressionTracesResponse
  - Added Type Alias WorkflowRunActionRepetitionsListNextResponse
  - Added Type Alias WorkflowRunActionRepetitionsListResponse
  - Added Type Alias WorkflowRunActionRepetitionsRequestHistoriesGetResponse
  - Added Type Alias WorkflowRunActionRepetitionsRequestHistoriesListNextResponse
  - Added Type Alias WorkflowRunActionRepetitionsRequestHistoriesListResponse
  - Added Type Alias WorkflowRunActionScopeRepetitionsGetResponse
  - Added Type Alias WorkflowRunActionScopeRepetitionsListNextResponse
  - Added Type Alias WorkflowRunActionScopeRepetitionsListResponse
  - Added Type Alias WorkflowRunActionsGetResponse
  - Added Type Alias WorkflowRunActionsListExpressionTracesNextResponse
  - Added Type Alias WorkflowRunActionsListExpressionTracesResponse
  - Added Type Alias WorkflowRunActionsListNextResponse
  - Added Type Alias WorkflowRunActionsListResponse
  - Added Type Alias WorkflowRunsGetResponse
  - Added Type Alias WorkflowRunsListNextResponse
  - Added Type Alias WorkflowRunsListResponse
  - Added Type Alias WorkflowSkuName
  - Added Type Alias WorkflowState
  - Added Type Alias WorkflowStatus
  - Added Type Alias WorkflowTriggerHistoriesGetResponse
  - Added Type Alias WorkflowTriggerHistoriesListNextResponse
  - Added Type Alias WorkflowTriggerHistoriesListResponse
  - Added Type Alias WorkflowTriggerProvisioningState
  - Added Type Alias WorkflowTriggersGetResponse
  - Added Type Alias WorkflowTriggersGetSchemaJsonResponse
  - Added Type Alias WorkflowTriggersListCallbackUrlResponse
  - Added Type Alias WorkflowTriggersListNextResponse
  - Added Type Alias WorkflowTriggersListResponse
  - Added Type Alias WorkflowVersionsGetResponse
  - Added Type Alias WorkflowVersionsListNextResponse
  - Added Type Alias WorkflowVersionsListResponse
  - Interface AppServiceEnvironment has a new optional parameter customDnsSuffixConfiguration
  - Interface AppServiceEnvironment has a new optional parameter networkingConfiguration
  - Interface AppServiceEnvironment has a new optional parameter upgradeAvailability
  - Interface AppServiceEnvironment has a new optional parameter upgradePreference
  - Interface ListCustomHostNameSitesNextOptionalParams has a new optional parameter hostname
  - Interface ListCustomHostNameSitesOptionalParams has a new optional parameter hostname
  - Class WebSiteManagementClient has a new parameter workflowRunActionRepetitions
  - Class WebSiteManagementClient has a new parameter workflowRunActionRepetitionsRequestHistories
  - Class WebSiteManagementClient has a new parameter workflowRunActions
  - Class WebSiteManagementClient has a new parameter workflowRunActionScopeRepetitions
  - Class WebSiteManagementClient has a new parameter workflowRuns
  - Class WebSiteManagementClient has a new parameter workflows
  - Class WebSiteManagementClient has a new parameter workflowTriggerHistories
  - Class WebSiteManagementClient has a new parameter workflowTriggers
  - Class WebSiteManagementClient has a new parameter workflowVersions
  - Added Enum KnownDeploymentBuildStatus
  - Added Enum KnownEnum14
  - Added Enum KnownKeyType
  - Added Enum KnownKind
  - Added Enum KnownOpenAuthenticationProviderType
  - Added Enum KnownParameterType
  - Added Enum KnownRecurrenceFrequency
  - Added Enum KnownResourceNotRenewableReason
  - Added Enum KnownUpgradeAvailability
  - Added Enum KnownUpgradePreference
  - Added Enum KnownWorkflowProvisioningState
  - Added Enum KnownWorkflowSkuName
  - Added Enum KnownWorkflowState
  - Added Enum KnownWorkflowStatus
  - Added Enum KnownWorkflowTriggerProvisioningState
  - Enum KnownCustomDomainStatus has a new value Unhealthy
  - Enum KnownEnum19 has a new value LinuxFunctions
  - Enum KnownEnum19 has a new value WindowsFunctions

**Breaking Changes**

  - Removed Enum KnownAppServiceCertificateOrderPatchResourcePropertiesAppServiceCertificateNotRenewableReasonsItem
  - Removed Enum KnownAppServiceCertificateOrderPropertiesAppServiceCertificateNotRenewableReasonsItem
  - Removed Enum KnownDomainPatchResourcePropertiesDomainNotRenewableReasonsItem
  - Removed Enum KnownDomainPropertiesDomainNotRenewableReasonsItem
  - Removed Enum KnownEnum20
  - Enum KnownEnum15 no longer has value LinuxFunctions
  - Enum KnownEnum15 no longer has value WindowsFunctions
    
    
## 12.0.0 (2022-04-07)
    
**Features**

  - Added operation group Global_2

**Breaking Changes**

  - Removed operation group Global
    
    
## 11.0.0 (2022-01-10)
    
**Features**

  - Added operation group ContainerApps
  - Added operation group ContainerAppsRevisions
  - Added operation Domains.transferOut
  - Added operation WebApps.getAuthSettingsV2WithoutSecrets
  - Added Interface Configuration
  - Added Interface Container
  - Added Interface ContainerAppCollection
  - Added Interface ContainerAppsConfiguration
  - Added Interface ContainerAppsCreateOrUpdateOptionalParams
  - Added Interface ContainerAppsDeleteOptionalParams
  - Added Interface ContainerAppSecret
  - Added Interface ContainerAppsGetOptionalParams
  - Added Interface ContainerAppsListByResourceGroupNextOptionalParams
  - Added Interface ContainerAppsListByResourceGroupOptionalParams
  - Added Interface ContainerAppsListBySubscriptionNextOptionalParams
  - Added Interface ContainerAppsListBySubscriptionOptionalParams
  - Added Interface ContainerAppsListSecretsOptionalParams
  - Added Interface ContainerAppsRevisionsActivateRevisionOptionalParams
  - Added Interface ContainerAppsRevisionsDeactivateRevisionOptionalParams
  - Added Interface ContainerAppsRevisionsGetRevisionOptionalParams
  - Added Interface ContainerAppsRevisionsListRevisionsNextOptionalParams
  - Added Interface ContainerAppsRevisionsListRevisionsOptionalParams
  - Added Interface ContainerAppsRevisionsRestartRevisionOptionalParams
  - Added Interface ContainerResources
  - Added Interface CustomHostnameSitesCollection
  - Added Interface CustomScaleRule
  - Added Interface Dapr
  - Added Interface DaprComponent
  - Added Interface DaprMetadata
  - Added Interface DomainsTransferOutOptionalParams
  - Added Interface EnvironmentVar
  - Added Interface HttpScaleRule
  - Added Interface Ingress
  - Added Interface ListCustomHostNameSitesNextOptionalParams
  - Added Interface ListCustomHostNameSitesOptionalParams
  - Added Interface QueueScaleRule
  - Added Interface RegistryCredentials
  - Added Interface RevisionCollection
  - Added Interface Scale
  - Added Interface ScaleRule
  - Added Interface ScaleRuleAuth
  - Added Interface Secret
  - Added Interface SecretsCollection
  - Added Interface Template
  - Added Interface TrafficWeight
  - Added Interface WebAppsGetAuthSettingsV2WithoutSecretsOptionalParams
  - Added Type Alias ActiveRevisionsMode
  - Added Type Alias ContainerApp
  - Added Type Alias ContainerAppProvisioningState
  - Added Type Alias ContainerAppsCreateOrUpdateResponse
  - Added Type Alias ContainerAppsGetResponse
  - Added Type Alias ContainerAppsListByResourceGroupNextResponse
  - Added Type Alias ContainerAppsListByResourceGroupResponse
  - Added Type Alias ContainerAppsListBySubscriptionNextResponse
  - Added Type Alias ContainerAppsListBySubscriptionResponse
  - Added Type Alias ContainerAppsListSecretsResponse
  - Added Type Alias ContainerAppsRevisionsGetRevisionResponse
  - Added Type Alias ContainerAppsRevisionsListRevisionsNextResponse
  - Added Type Alias ContainerAppsRevisionsListRevisionsResponse
  - Added Type Alias CustomHostnameSites
  - Added Type Alias DomainsTransferOutResponse
  - Added Type Alias EnterpriseGradeCdnStatus
  - Added Type Alias Enum16
  - Added Type Alias Enum17
  - Added Type Alias Enum18
  - Added Type Alias Enum19
  - Added Type Alias Enum20
  - Added Type Alias IngressTransportMethod
  - Added Type Alias ListCustomHostNameSitesNextResponse
  - Added Type Alias ListCustomHostNameSitesResponse
  - Added Type Alias Revision
  - Added Type Alias RevisionHealthState
  - Added Type Alias RevisionProvisioningState
  - Added Type Alias WebAppsGetAuthSettingsV2WithoutSecretsResponse
  - Class WebSiteManagementClient has a new parameter containerApps
  - Class WebSiteManagementClient has a new parameter containerAppsRevisions
  - Type Alias KubeEnvironment has a new parameter environmentType
  - Type Alias KubeEnvironment has a new parameter containerAppsConfiguration
  - Type Alias KubeEnvironmentPatchResource has a new parameter containerAppsConfiguration
  - Type Alias StaticSiteARMResource has a new parameter enterpriseGradeCdnStatus
  - Type Alias StaticSitePatchResource has a new parameter enterpriseGradeCdnStatus
  - Added Enum KnownActiveRevisionsMode
  - Added Enum KnownContainerAppProvisioningState
  - Added Enum KnownEnterpriseGradeCdnStatus
  - Added Enum KnownEnum16
  - Added Enum KnownEnum17
  - Added Enum KnownEnum18
  - Added Enum KnownEnum19
  - Added Enum KnownEnum20
  - Added Enum KnownIngressTransportMethod
  - Added Enum KnownRevisionHealthState
  - Added Enum KnownRevisionProvisioningState

**Breaking Changes**

  - Removed Enum KnownEnum10
  - Removed Enum KnownEnum11
  - Removed Enum KnownEnum12
  - Removed Enum KnownEnum13
  - Removed Enum KnownEnum14
    
    
## 10.0.0 (2021-12-13)

The package of @azure/arm-appservice is using our next generation design principles since version 10.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
