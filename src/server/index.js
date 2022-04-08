import axios from './axios.js';

export default function request( config, loading = false ) {
  if (loading) {
    // iview.Spin.show();
  }
  return new Promise((resolve, reject) => {
    console.log(config)
    axios(config).then(res => {
        // if (loading) iview.Spin.hide();
        resolve(res)
      },
      (err) => {
        console.log(err);
        // if (loading) iview.Spin.hide();
        reject(err)
      }
    )
  })
}
