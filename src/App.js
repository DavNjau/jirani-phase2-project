import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import RegistrationForm from './Components/RegistrationForm';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="why fw-bold mb-3">Why Choose Jirani?</h2>
            <p className="lead">
              Jirani helps local entrepreneurs connect with their communities and
              grow their businesses online. Our platform gives your shop more
              visibility, helps you attract nearby customers, and supports local
              trade through technology. Join hundreds of small business owners
              who are already part of the Jirani family today!
            </p>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <RegistrationForm />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Dashboard />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

