/*
 * Copyright 2019 pystol.org - All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author: Carlos Camacho <carloscamachoucv@gmail.com>
 */

var corssproxy = 'http://urbanos-cors.eastus.azurecontainer.io:8080/';
var badges = [
	{
		type: 'picture',
		size: { x: 1, y: 2 },
		position: { x: 1, y: 1 },
		src: 'assets/images/logo_urbanos.png',
		color: 'widget-logo',
	},
	{
		type: 'text',
		size: { x: 3, y: 1 },
		position: { x: 2, y: 1 },
		title: "UrbanOS",
		subtitle: 'The Open Source Data Platform',
		description: 'GitHub actions reports',
		link: 'https://github.com/UrbanOS-Public',
		color: 'widget-text',
	},
	{
		type: 'clock',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 1 },
		color: 'widget-meter',
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 2, y: 2 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/andi.yml/badge.svg?branch=&event=pull_request',
		title: "Andi",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/andi.yml',
		measure: { x: 90, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 3, y: 2 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/valkyrie.yml/badge.svg?branch=&event=pull_request',
		title: "Valkyrie",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/valkyrie.yml',
		measure: { x: 90, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 2, y: 3 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/discovery_api.yml/badge.svg?branch=&event=pull_request',
		title: "Discovery API",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/discovery_api.yml',
		measure: { x: 120, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 2 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/discovery_streams.yml/badge.svg?branch=&event=pull_request',
		title: "Discovery Streams",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/discovery_streams.yml',
		measure: { x: 140, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 5, y: 3 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/forklift.yml/badge.svg?branch=&event=pull_request',
		title: "Forklift",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/forklift.yml',
		measure: { x: 90, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 4, y: 2 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/reaper.yml/badge.svg?branch=&event=pull_request',
		title: "Reaper",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/reaper.yml',
		measure: { x: 90, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 4, y: 2 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/alchemist.yml/badge.svg?branch=&event=pull_request',
		title: "Alchemist",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smartcitiesdata/actions/workflows/alchemist.yml',
		measure: { x: 90, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 6, y: 3 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/smart_city/actions/workflows/smart_city.yml/badge.svg?branch=&event=pull_request',
		title: "Smart City",
		description: '',
		link: 'https://github.com/UrbanOS-Public/smart_city/actions/workflows/smart_city.yml',
		measure: { x: 120, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 2, y: 4 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/react_discovery_ui/actions/workflows/npm-build.yml/badge.svg?branch=&event=pull_request',
		title: "React Discovery UI",
		description: '',
		link: 'https://github.com/UrbanOS-Public/react_discovery_ui/actions/workflows/npm-build.yml',
		measure: { x: 120, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 4, y: 4 },
		uri: corssproxy + 'https://github.com/UrbanOS-Public/charts/actions/workflows/release.yml/badge.svg?branch=&event=push',
		title: "Charts",
		description: '',
		link: 'https://github.com/UrbanOS-Public/charts/actions/workflows/release.yml',
		measure: { x: 120, y: 9 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	}
];
