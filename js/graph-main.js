import data from '../miserables.json' assert {type: 'json'};
import { forceGraph } from './graph.js'

let chart = forceGraph(data, {
	nodeId: d => d.id,
	nodeGroup: d => d.group,
	nodeTitle: d => `${d.id}\n${d.group}`,
	linkStrokeWidth: l => Math.sqrt(l.value),
	width: 1024,
	height: 600
});

