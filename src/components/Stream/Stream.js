import React from 'react';
import styles from './Stream.css';


class Stream extends React.Component {
    render() {
        return (
    
                <div className={styles.Stream}>
                    Stream Component
                    <h1>Hello, {this.props.name}</h1>
                
                <div className="container mb-3">
                            <div className="row mt-3 mb-3">
                                <div className="col-md-12">
                                    <h1>Amazon Kinesis Video Streams Media Viewer</h1>
                                </div>
                            </div>
                            <div className="row loader"></div>
                            <div className="main">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Streaming Protocol</label>
                                            <select id="protocol" className="form-control form-control-sm">
                                                <option>HLS</option>
                                                <option>DASH</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Player</label>
                                            <select id="player" className="form-control form-control-sm">
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Region</label>
                                            <select id="region" className="form-control form-control-sm">
                                                <option>ap-east-1</option>
                                                <option>ap-northeast-1</option>
                                                <option>ap-northeast-2</option>
                                                <option>ap-south-1</option>
                                                <option>ap-southeast-1</option>
                                                <option>ap-southeast-2</option>
                                                <option>ca-central-1</option>
                                                <option>eu-central-1</option>
                                                <option>eu-west-1</option>
                                                <option>eu-west-2</option>
                                                <option>eu-west-3</option>
                                                <option>sa-east-1</option>
                                                <option selected>us-east-1</option>
                                                <option>us-east-2</option>
                                                <option>us-west-2</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>AWS Access Key</label>
                                            <input id="accessKeyId" type="password" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="form-group">
                                            <label>AWS Secret Key</label>
                                            <input id="secretAccessKey" type="password" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="form-group">
                                            <label>AWS Session Token (Optional)</label>
                                            <input id="sessionToken" type="password" className="form-control form-control-sm" />
                                        </div>
                                        <div className="form-group">
                                            <label>Endpoint (Optional)</label>
                                            <input id="endpoint" type="text" className="form-control form-control-sm" />
                                        </div>
                                        <div className="form-group">
                                            <label>Stream name</label>
                                            <input id="streamName" type="text" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Playback Mode</label>
                                            <select id="playbackMode" className="form-control form-control-sm">
                                                <option selected>LIVE</option>
                                                <option>LIVE_REPLAY</option>
                                                <option>ON_DEMAND</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Start Timestamp</label>
                                            <input id="startTimestamp" type="datetime-local" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="form-group">
                                            <label>End Timestamp</label>
                                            <input id="endTimestamp" type="datetime-local" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Fragment Selector Type</label>
                                            <select id="fragmentSelectorType" className="form-control form-control-sm">
                                                <option selected>SERVER_TIMESTAMP</option>
                                                <option>PRODUCER_TIMESTAMP</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Container Format</label>
                                            <select id="containerFormat" className="form-control form-control-sm">
                                                <option selected="">FRAGMENTED_MP4</option>
                                                <option>MPEG_TS</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Discontinuity Mode</label>
                                            <select id="discontinuityMode" className="form-control form-control-sm">
                                                <option selected>ALWAYS</option>
                                                <option>NEVER</option>
                                                <option>ON_DISCONTINUITY</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Display Fragment Timestamp</label>
                                            <select id="displayFragmentTimestamp" className="form-control form-control-sm">
                                                <option>ALWAYS</option>
                                                <option selected>NEVER</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Display Fragment Number</label>
                                            <select id="displayFragmentNumber" className="form-control form-control-sm">
                                                <option>ALWAYS</option>
                                                <option selected>NEVER</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Max Manifest/Playlist Fragment Results</label>
                                            <input id="maxResults" type="text" className="form-control form-control-sm"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Expires (seconds)</label>
                                            <input id="expires" type="text" className="form-control form-control-sm"/>
                                        </div>
                                        <button id="start" type="submit" className="btn btn-primary">Start Playback</button>
                                    </div>
                                    <div className="col-md-8">
                                        <div id="playerContainer">

                                            {/* HLS.js elements  */}
                                            <video id="hlsjs" className="player" controls autoplay></video>
                                            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

                                            {/* VideoJS elements */}
                                            <video id="videojs" className="player video-js vjs-default-skin" controls autoplay></video>
                                            <link rel="stylesheet" href="https://vjs.zencdn.net/6.6.3/video-js.css"/>
                                            <script src="https://vjs.zencdn.net/6.6.3/video.js"></script>
                                            <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.14.1/videojs-contrib-hls.js"></script>

                                            {/* Shaka Player elements  */}
                                            <video id="shaka" className="player" controls autoplay></video>
                                            <script src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.4.1/shaka-player.compiled.js">
                                            </script>

                                            {/* DASH.js elements  */}
                                            <video id="dashjs" className="player" controls autoplay=""></video>
                                            <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
                                        </div>
                                    </div>
                                        <h3 >Logs</h3>
                                        
                                        <div className="card bg-light mb-3">
                                            <pre id="logs" className="card-body text-monospace" ></pre>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
      ); 
    }; 
}; 



export default Stream;
