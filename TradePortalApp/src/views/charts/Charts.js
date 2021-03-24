import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartHorizontalBar,
  CChartPolarArea
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/reusable'
import html2canvas from "html2canvas";
import pdfConverter from 'jspdf';


const Charts = () => {
	
	
  const div2PDF = e => {
    /////////////////////////////
    // Hide/show button if you need
    /////////////////////////////

    const but = e.target;
    but.style.display = "none";
    let input = document.getElementsByClassName("div2PDF")[0];
    console.log("input ",input);
    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new pdfConverter("l", "pt");
      pdf.addImage(
        img,
        "png",
        input.offsetLeft,
        input.offsetTop,
        input.clientWidth,
        input.clientHeight
      );
      pdf.save("chart.pdf");
      but.style.display = "block";
    });
  };
	

  return (
  <div>
        <div className="div2PDF">
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Total Transaction Report
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'Transaction Count',
                backgroundColor: '#f87979',
                data: [50, 30, 27, 35, 45, 39]
              }
            ]}
            labels={['Import LC Lodgement', 'Export LC Lodgement', 'Gurantees Devolvement', 'Remittance Inward', 'Import Collection Lodgement', 'Export Collection Acceptance']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

      
      

      <CCard>
        <CCardHeader>
          Pending Report
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF'
                ],
                data: [5, 8, 15]
              }
            ]}
            labels={['Pending at Maker', 'Pending at Checker', 'Pending with Bank']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

      
      <CCard>
        <CCardHeader>
          Work Summary
        </CCardHeader>
        <CCardBody>
          <CChartHorizontalBar
            datasets={[
              {
                label: 'No. of Transactions',
                backgroundColor: '#41B883',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                tooltipLabelColor: 'rgba(179,181,198,1)',
                data: [65, 59, 85, 81, 76]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Export Collection', 'Gurantee', 'Import Collection', 'Export Letter of Credit',
              'Import Letter of Credit'
            ]}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>
          Work Summary
        </CCardHeader>
        <CCardBody>
          
        </CCardBody>
      </CCard>

    </CCardGroup>
	</div>
        <div>
        <iframe src="https://blog.bitsrc.io/best-practices-in-using-iframes-with-react-6193feaa1e08" width="100%"></iframe>
        </div>
     </div>
  )
}

export default Charts
