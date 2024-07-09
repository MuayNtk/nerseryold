"use client";

import React from 'react';

const FormTab6: React.FC = () => {
    const styles = {
      border: '1px solid #dddddd',
      width: '80%',
      margin: '0 auto',
      
    };
    const td = {
        border: '1px solid #dddddd',
        height: '50px',
      };
  
    return (
      
      <table style={styles}>
          <tr>
              <td style={td} width={ 300 }>&nbsp;&nbsp;実施事業番号及び合計事業数</td>
              <td style={td} width={ 100 }  align='center'>①</td>
              <td style={td} width={ 100 }  align='center'>②</td>
              <td style={td} width={ 100 }  align='center'>③</td>
              <td style={td} width={ 100 }  align='center'>&nbsp;&nbsp;&nbsp;</td>
              <td style={td} width={ 100 }  align='center'>合計</td>
              <td style={td} width={ 100 }  align='center'>3</td>
              <td style={td} width={ 100 }  align='center'>事業</td>
          </tr>
          <tr>
              <td style={td}>&nbsp;&nbsp;各事業の執行予定額の合計</td>
              <td style={td} colSpan={6}  align='right'>600,000</td>
              <td style={td} align='center'>円</td>
          </tr>
      </table>
      
      
        
    );
  };

export default FormTab6;

