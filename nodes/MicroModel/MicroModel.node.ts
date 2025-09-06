import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class MicroModel implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Micro Model',
		name: 'MicroModel',
		icon: 'file:micromodel.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Automatically fine-tune and train your LLM on production data.',
		defaults: {
			name: 'Micro Model',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'MicroModelApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.microyourmodel.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Resources and operations will go here
		],
	};
}
