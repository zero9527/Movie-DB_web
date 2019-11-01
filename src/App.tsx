import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Cookies from 'js-cookie';

import { IntlProvider } from 'react-intl';
import messages from '@/lang';

interface Props extends RouteComponentProps {
  [prop: string]: any
}
export interface IState {
  lang: string,
  timer?: any
}
export type State = Readonly<IState>;

export interface IAppContext {
  appname: string
}
const defaultContext: IAppContext = { appname: 'Movie-DB' };
export const AppContext = React.createContext(defaultContext);

class App extends React.Component<Props, State> {
  public readonly state: State = {
    lang: Cookies.get('lang') || 'zh'
  };
  
  constructor(props: Props) {
    super(props);
  }
  
  public onLangChange(locale: string) {
    Cookies.set('lang', locale);
    this.setState({ lang: locale });
  }

  public render() {
    // console.log(this.props);
    const { lang } = this.state;

    return (
      <React.Fragment>
        <IntlProvider key="intl" locale={lang} messages={messages[lang]}>
          <AppContext.Provider value={defaultContext}>
            { this.props.children }
          </AppContext.Provider>
        </IntlProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
