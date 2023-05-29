"use server"

import { google } from "googleapis";

export const fetchData = async () => {
    // TODO : fetch data from google sheets and set output data

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: "v4", auth });

    //! hardcode test
    const range = `Sheet1!A1:B4`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    return response;
}