import {App, Stack, StackProps} from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');
import kms = require('@aws-cdk/aws-kms');

export class CdkAppStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
    const s3cmk = kms.Key.fromKeyArn(this, 'cmk', '<replace with your customer managed CMK ARN>')
    new s3.Bucket(this, 'cdkBucket', {
      versioned: true,
      encryption: s3.BucketEncryption.KMS,
      encryptionKey: s3cmk
    // The code that defines your stack goes here
  });
 }
}
