import React, {Component} from 'react';

import {membersSheet} from 'config/sheets';

import {initGoogleApi, loadDataFromSpreadsheet} from 'utils/googleApi';
import parseMembersSheetRow from 'utils/parseMembersSheetRow';

import FamilyTree from 'components/family-tree/familyTree';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersList: [],
    };
  }

  componentDidMount() {
    this.loadMembersData(process.env.REACT_APP_GAPI_KEY, process.env.REACT_APP_SPREADSHEET_ID);

  }

  loadMembersData = (apiKey, spreadsheetId) => {
    window.gapi.load('client', async () => {
      await initGoogleApi(apiKey);

      loadDataFromSpreadsheet({
        spreadsheetId,
        sheetName: membersSheet.name,
        startRow: membersSheet.startRow,
        rowWidth: membersSheet.columnsOrder.length,
      }, (err, data) => {
        if (err) {
          console.log(err.message);
          return;
        }

        this.setState({
          membersList: data.map(parseMembersSheetRow),
        });
      });
    });
  }

  render() {
    const {membersList} = this.state;

    return <FamilyTree membersList={membersList}/>;
  }
}

export default App;
