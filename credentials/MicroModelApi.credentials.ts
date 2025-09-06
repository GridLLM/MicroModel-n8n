import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class MicroModelCredentialsApi implements ICredentialType {
	name = 'microModelCredentialsApi';
	displayName = 'MicroModel Credentials API';

	documentationUrl = 'https://docs.microyourmodel.com';

	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	// This credential is currently not used by any node directly
	// but the HTTP Request node can use it to make requests.
	// The credential is also testable due to the `test` property below
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{ $credentials.username }}',
				password: '={{ $credentials.password }}',
			},
			qs: {
				// Send this as part of the query string
				n8n: 'rocks',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.microyourmodel.com/',
			url: '',
		},
	};
}
