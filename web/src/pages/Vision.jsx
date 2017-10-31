import React from 'react';
import { Chart, Series } from '../BotChart';
import { ConfigSlider } from '../Config';

export default (props) => {
    return <div>

        <h6>Object detector runtime (milliseconds) </h6>
        <Chart>
            <Series
                value={ (model) => model.camera.object_detection.message.Command.CameraObjectDetection.detector_nsec * 1e-6 }
                trigger={ (model) => model.camera.object_detection.message.Command.CameraObjectDetection.frame }
                timestamp={ (model) => model.camera.object_detection.local_timestamp } />
        </Chart>

        <h6>Correlation tracker runtime (milliseconds) </h6>
        <Chart>
            <Series
                value={ (model) => model.camera.region_tracking.message.Command.CameraRegionTracking.tracker_nsec * 1e-6 }
                trigger={ (model) => model.camera.region_tracking.message.Command.CameraRegionTracking.frame }
                timestamp={ (model) => model.camera.region_tracking.local_timestamp } />
        </Chart>

        <h6>Manual control speeds, minimum (dead zone)</h6>
        <ConfigSlider item="vision.min_manual_control_speed" min="0.0" max="1.0" step="1e-4" />

        <h6>Manual control speeds, maximum</h6>
        <ConfigSlider item="vision.max_manual_control_speed" min="0.0" max="2.0" step="1e-4" />

        <h6>Tracked region, minimum PSR before discard</h6>
        <ConfigSlider item="vision.tracking_min_psr" min="0.0" max="20.0" step="1e-4" />

        <h6>Tracked region, minimum area before discard</h6>
        <ConfigSlider item="vision.tracking_min_area" min="0.0" max="0.5" step="1e-4" />

        <h6>Tracked region, maximum area before discard</h6>
        <ConfigSlider item="vision.tracking_max_area" min="0.0" max="3.5" step="1e-4" />

        <h6>Tracked region, default area at initialization</h6>
        <ConfigSlider item="vision.tracking_default_area" min="0.0" max="0.5" step="1e-4" />

    </div>;
}
