import React from 'react';
import { ConfigSlider } from '../Config';
import { Chart, Series } from '../BotChart';

export default (props) => {
    const gimbal_status_timestamp = (model) => model.gimbal_status.local_timestamp;

    return <div>

        <h6>Max gimbal control rate</h6>
        <ConfigSlider item="gimbal.max_rate" min="0" max="800" step="1" />

        <h4>Drift compensation</h4>

        <h6>Current drift compensation outputs to gimbal control rate</h6>
        <Chart>
            <Series
                strokeStyle='#a22'
                value={ (model) => model.gimbal_status.message.GimbalControlStatus.drift_compensation[0] }
                trigger={gimbal_status_timestamp} timestamp={gimbal_status_timestamp} />
            <Series
                strokeStyle='#22a'
                value={ (model) => model.gimbal_status.message.GimbalControlStatus.drift_compensation[1] }
                trigger={gimbal_status_timestamp} timestamp={gimbal_status_timestamp} />
        </Chart>

        <h6>Maximum compensation rate</h6>
        <ConfigSlider item="gimbal.drift_compensation_max" min="0" max="10" step="1e-4" />

        <h6>Gain for drift compensation adjustments</h6>
        <ConfigSlider item="gimbal.drift_compensation_gain.0" min="0" max="300.0" step="1e-4" />
        <ConfigSlider item="gimbal.drift_compensation_gain.1" min="0" max="300.0" step="1e-4" />

        <h6>Threshold for tracking rectangles slow enough to affect drift compensation</h6>
        <ConfigSlider item="gimbal.drift_rect_speed_threshold" min="0" max="0.05" step="1e-4" />

        <h4>Tracking</h4>

        <h5>Yaw gain region 0</h5>

        <h6>Width</h6>
        <ConfigSlider item="gimbal.yaw_gains.0.width" min="0" max="1.0" step="1e-4" />

        <h6>Proportional gain</h6>
        <ConfigSlider item="gimbal.yaw_gains.0.p_gain" min="0" max="2000.0" step="1e-4" />

        <h6>Integral gain</h6>
        <ConfigSlider item="gimbal.yaw_gains.0.i_gain" min="0" max="10.0" step="1e-4" />

        <h5>Yaw gain region 1</h5>

        <h6>Width</h6>
        <ConfigSlider item="gimbal.yaw_gains.1.width" min="0" max="1.0" step="1e-4" />

        <h6>Proportional gain</h6>
        <ConfigSlider item="gimbal.yaw_gains.1.p_gain" min="0" max="2000.0" step="1e-4" />

        <h6>Integral gain</h6>
        <ConfigSlider item="gimbal.yaw_gains.1.i_gain" min="0" max="10.0" step="1e-4" />

        <h5>Pitch gain region 0</h5>

        <h6>Width</h6>
        <ConfigSlider item="gimbal.pitch_gains.0.width" min="0" max="1.0" step="1e-4" />

        <h6>Proportional gain</h6>
        <ConfigSlider item="gimbal.pitch_gains.0.p_gain" min="0" max="2000.0" step="1e-4" />

        <h6>Integral gain</h6>
        <ConfigSlider item="gimbal.pitch_gains.0.i_gain" min="0" max="10.0" step="1e-4" />

        <h5>Pitch gain region 1</h5>

        <h6>Width</h6>
        <ConfigSlider item="gimbal.pitch_gains.1.width" min="0" max="1.0" step="1e-4" />

        <h6>Proportional gain</h6>
        <ConfigSlider item="gimbal.pitch_gains.1.p_gain" min="0" max="2000.0" step="1e-4" />

        <h6>Integral gain</h6>
        <ConfigSlider item="gimbal.pitch_gains.1.i_gain" min="0" max="10.0" step="1e-4" />

        <h4>Limits</h4>

        <h6>Yaw limits, min/max</h6>
        <ConfigSlider item="gimbal.yaw_limits.0" min="-2048" max="2048" step="1" />
        <ConfigSlider item="gimbal.yaw_limits.1" min="-2048" max="2048" step="1" />

        <h6>Pitch limits, min/max</h6>
        <ConfigSlider item="gimbal.pitch_limits.0" min="-1024" max="1024" step="1" />
        <ConfigSlider item="gimbal.pitch_limits.1" min="-1024" max="1024" step="1" />

        <h6>Limiter gain</h6>
        <ConfigSlider item="gimbal.limiter_gain" min="0" max="100" step="1e-4" />

        <h6>Limiter slowdown extent</h6>
        <ConfigSlider item="gimbal.limiter_slowdown_extent.0" min="1" max="500" step="1e-4" />
        <ConfigSlider item="gimbal.limiter_slowdown_extent.1" min="1" max="500" step="1e-4" />

    </div>;
}
