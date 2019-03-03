import React from 'react';
import ReactDOM from 'react-dom';
import OverlayLoader from '../lib/OverlayLoader';
// import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader';
class App extends React.Component {
   render() {
      return (
         <div>
            <OverlayLoader 
              color={'red'} 
              loader="ScaleLoader" 
              text="Loading... Please wait!" 
              active={true} 
              backgroundColor={'black'}
              >

              <table>
                <tbody>
                  <tr>
                    <td>
                      Lorem ipsum Non Excepteur ex non exercitation mollit minim dolor Excepteur qui laborum consequat fugiat proident laborum officia occaecat deserunt dolor laborum in et laboris nostrud minim consequat cillum enim elit.                                        
                    </td>  
                  </tr>
                  <tr>
                    <td>Lorem ipsum Aute sint et et exercitation sint in veniam cillum enim non irure.</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum Adipisicing reprehenderit deserunt consequat in ex ullamco officia sed enim est amet non.</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum Adipisicing reprehenderit deserunt consequat in ex ullamco officia sed enim est amet non.</td>
                  </tr>                  
                  <tr>
                    <td>
                      Lorem ipsum Non Excepteur ex non exercitation mollit minim dolor Excepteur qui laborum consequat fugiat proident laborum officia occaecat deserunt dolor laborum in et laboris nostrud minim consequat cillum enim elit.                                        
                    </td>  
                  </tr>
                  <tr>
                    <td>Lorem ipsum Aute sint et et exercitation sint in veniam cillum enim non irure.</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum Adipisicing reprehenderit deserunt consequat in ex ullamco officia sed enim est amet non.</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum Adipisicing reprehenderit deserunt consequat in ex ullamco officia sed enim est amet non.</td>
                  </tr>                                    
                </tbody>
              </table>
            </OverlayLoader>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
