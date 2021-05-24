/* eslint-disable max-len */
import React from 'react';
import Graph from '../../lib/transitionBarGraph';

// data from https://journals.plos.org/plosone/article/figure?id=10.1371/journal.pone.0111913.t001
import plasticPollutionData from '../../../data/plasticPollution.json';
import NavigationPage from '../../lib/navigationPage';

export default function EcologicalFlow(props) {
  const colors = ['#A6D6A4', '#F3CF87', '#C99F9F', '#65729E', '#A3ACD7', '#DDC997', '#7CB0A9', '#9F88C4'];
  return (
    <div className="bg-primary text-white h-screen">
      This is the ecological flow page.
      <Graph yAxisLabel="Estimated weight of macroplastics in tons" data={plasticPollutionData.weight} id="impact-parts-graph" colors={colors} initialHeight={350} initialWidth={1000} initialMargin={60} />
      <NavigationPage />
    </div>
  );
}
