import * as cdk from 'aws-cdk-lib';
import { BitmapDashboard } from 'cdk-monitoring-constructs';
import { Construct } from 'constructs';

export class QExperimentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new BitmapDashboard(this, 'Dashboard', {
      dashboardName: 'my-dashboard',
      defaultInterval: cdk.Duration.hours(6),
    });
  }
}

// export class QExperimentStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);

//     new MonitoringFacade(this, 'Facade', {
//       alarmFactoryDefaults: {
//         alarmNamePrefix: 'q-experiment',
//         actionsEnabled: true,
//       },
//     });
//   }
// }
