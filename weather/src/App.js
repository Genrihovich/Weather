import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';
import Header from './shared/Header/Header';
//import { Popup } from './shared/Header/Popup/Popup';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      city: 'Київ'
    })
    this.changeSelectCity = this.changeSelectCity.bind(this);
  }

  changeSelectCity = (value) => {
    this.setState({
      city: value
    })
    console.log('Місто вибране', value);
  }

  render() {
    return (
      <div className="global-container">
        {/* <Popup /> */}
        <div className="container">

          {/* <Header onCityChange={this.changeSelectCity} city={this.state.city} /> */}
          <Header onCityChange={this.changeSelectCity} />
          <Routes>
            <Route path="/" element={<Home city={this.state.city} />} />
            <Route path="/month-statistics" element={<MonthStatistics />} />
          </Routes>

        </div>
      </div>
    );
  }
}

export default App;