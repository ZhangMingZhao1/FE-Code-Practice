import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/pictureData').default);
app.model(require('./models/changeMenu').default);
app.model(require('./models/signup').default);
app.model(require('./models/signin').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
