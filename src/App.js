import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Service Report</h1>
        <form>
          <label htmlFor="report-no">Report Number</label>
          <input id="report-no" type="text"/>

          <label htmlFor="job-no">Job Number</label>
          <input id="job-no" type="text"/>

          <label htmlFor="customer-name">Customer Name</label>
          <input id="customer-name" type="text"/>

          <label htmlFor="location">Location</label>
          <input id="location" type="text"/>

          <label htmlFor="make-model">Make/Model</label>
          <input id="make-model" type="text"/>

          <label htmlFor="rego">Rego</label>
          <input id="rego" type="text"/>

          <label htmlFor="plant-no">Plant No</label>
          <input id="plant-no" type="text"/>

          <label htmlFor="serial-no">Serial No</label>
          <input id="serial-no" type="text"/>

          <label htmlFor="customer-opinion">Customer opinion before commencing</label>
          <textarea id="customer-opinion"  rows="4" cols="50">

          </textarea>

          <label htmlFor="">Customer opinion before commencing</label>
          <input id="customer-opinion" type="checkbox"/>

          <label htmlFor="">Customer opinion before commencing</label>

          <div>
            TEST DRIVE AND CHECK ALL FUNCTIONS
            <label htmlFor="test-drive-ok">OK</label>
            <input name="test-drive-ok" type="checkbox" />
            <label htmlFor="test-drive-attn">ATTN</label>
            <input name="test-drive-attn" type="checkbox" />
          </div>

          <div>
            CHECK ALL WORKING LIGHTS AND LENSES FOR CRACKS
            <label htmlFor="lights-lenses-ok">OK</label>
            <input name="lights-lenses-ok" type="checkbox" />
            <label htmlFor="lights-lenses-attn">ATTN</label>
            <input name="lights-lenses-attn" type="checkbox" />
          </div>

          <div>
            CHECK OPERATORS SEAT AND SAFETY BELT OPERATION
            <label htmlFor="seat-safety-belt">OK</label>
            <input name="seat-safety-bel" type="checkbox" />
            <label htmlFor="seat-safety-bel">ATTN</label>
            <input name="seat-safety-bel" type="checkbox" />
          </div>

          <div>
          CHECK ALL GAUGES AND SAFETY LEVER OPERATION
            <label htmlFor="gauges-lever-operation">OK</label>
            <input name="gauges-lever-operation" type="checkbox" />
            <label htmlFor="gauges-lever-operation">ATTN</label>
            <input name="gauges-lever-operation" type="checkbox" />
          </div>

          <div>
          CHECK SAFETY DECALS AND NUMBER PLATES
            <label htmlFor="decals-number-plates">OK</label>
            <input name="decals-number-plates" type="checkbox" />
            <label htmlFor="decals-number-plates">ATTN</label>
            <input name="decals-number-plates" type="checkbox" />
          </div>

          <div>
          CHECK RUBBER TRACK, WEAR & TENSION
            <label htmlFor="rubber-check">OK</label>
            <input name="rubber-check" type="checkbox" />
            <label htmlFor="rubber-check">ATTN</label>
            <input name="rubber-check" type="checkbox" />
          </div>

          <div>
            CHECK TYRE PRESSURE & CONDITION (IF APPLICABLE)
            <label htmlFor="type-condition">OK</label>
            <input name="type-condition" type="checkbox" />
            <label htmlFor="type-condition">ATTN</label>
            <input name="type-condition" type="checkbox" />
          </div>

          <div>
            CHECK ALL SAFETY GUARDS / BONNET & LATCHES
            <label htmlFor="guards-bonnet-latches">OK</label>
            <input name="guards-bonnet-latches" type="checkbox" />
            <label htmlFor="guards-bonnet-latches">ATTN</label>
            <input name="guards-bonnet-latches" type="checkbox" />
          </div>

          <div>
            CHECK ALL HYDRAULIC LINES & FITTINGS
            <label htmlFor="hydraulics">OK</label>
            <input name="hydraulics" type="checkbox" />
            <label htmlFor="hydraulics">ATTN</label>
            <input name="hydraulics" type="checkbox" />
          </div>

          <div>
            GREASE ALL PIVOT POINTS & SLEW RING
            <label htmlFor="grease">OK</label>
            <input name="grease" type="checkbox" />
            <label htmlFor="grease">ATTN</label>
            <input name="grease" type="checkbox" />
          </div>

          <div>
            CHECK DIGGING ARM / FRAMEWORK FOR CRACKING
            <label htmlFor="digging-arm">OK</label>
            <input name="digging-arm" type="checkbox" />
            <label htmlFor="digging-arm">ATTN</label>
            <input name="digging-arm" type="checkbox" />
          </div>

          <div>
            CHECK DIGGING ARM / FRAMEWORK FOR CRACKING
            <label htmlFor="digging-arm">OK</label>
            <input name="digging-arm" type="checkbox" />
            <label htmlFor="digging-arm">ATTN</label>
            <input name="digging-arm" type="checkbox" />
          </div>

          <div>
            CHECK EXHAUST SYSTEM
            <label htmlFor="exhaust-system">OK</label>
            <input name="exhaust-system" type="checkbox" />
            <label htmlFor="exhaust-system">ATTN</label>
            <input name="exhaust-system" type="checkbox" />
          </div>

          <div>
            CHECK PIN & BUSH WEAR
            <label htmlFor="pin-bush-wear">OK</label>
            <input name="pin-bush-wear" type="checkbox" />
            <label htmlFor="pin-bush-wear">ATTN</label>
            <input name="pin-bush-wear" type="checkbox" />
          </div>

          <div>
            CHECK ALL WARNING ALARMS / HORN
            <label htmlFor="alarm-horn">OK</label>
            <input name="alarm-horn" type="checkbox" />
            <label htmlFor="alarm-horn">ATTN</label>
            <input name="alarm-horn" type="checkbox" />
          </div>

          <div>
            INSPECT UNIJOINTS, CENTREPIN & SLIPSPLINES
            <label htmlFor="unijoints">OK</label>
            <input name="unijoints" type="checkbox" />
            <label htmlFor="unijoints">ATTN</label>
            <input name="unijoints" type="checkbox" />
          </div>

          <div>
            INSEPECT CONDITON OF BODY, COVERS, DOORS & SEALS
            <label htmlFor="body-covers">OK</label>
            <input name="body-covers" type="checkbox" />
            <label htmlFor="body-covers">ATTN</label>
            <input name="body-covers" type="checkbox" />
          </div>

          <div>
            CHECK OIL LEVEL & WATER LEVELS IN ALL RESERVOIRS
            <label htmlFor="oil-water">OK</label>
            <input name="oil-water" type="checkbox" />
            <label htmlFor="oil-water">ATTN</label>
            <input name="oil-water" type="checkbox" />
          </div>

          <div>
            CHECK BATTERY ELECTROLYTE
            <label htmlFor="battery-electrolyte">OK</label>
            <input name="battery-electrolyte" type="checkbox" />
            <label htmlFor="battery-electrolyte">ATTN</label>
            <input name="battery-electrolyte" type="checkbox" />
          </div>

          <div>
            CHANGE ENGINE OIL & FILTER
            <label htmlFor="engine-oil-filter">OK</label>
            <input name="engine-oil-filter" type="checkbox" />
            <label htmlFor="engine-oil-filter">ATTN</label>
            <input name="engine-oil-filter" type="checkbox" />
          </div>

          <div>
            CHANGE FUEL FILTER
            <label htmlFor="fuel-filter">OK</label>
            <input name="fuel-filter" type="checkbox" />
            <label htmlFor="fuel-filter">ATTN</label>
            <input name="fuel-filter" type="checkbox" />
          </div>

          <div>
            CHANGE OUTERAIR FILTER
            <label htmlFor="outerair-filter">OK</label>
            <input name="outerair-filter" type="checkbox" />
            <label htmlFor="outerair-filter">ATTN</label>
            <input name="outerair-filter" type="checkbox" />
          </div>

          <div>
            CHANGE INNERAIR FILTER
            <label htmlFor="innerair-filter">OK</label>
            <input name="innerair-filter" type="checkbox" />
            <label htmlFor="innerair-filter">ATTN</label>
            <input name="innerair-filter" type="checkbox" />
          </div>

          <div>
            CHANGE HYDRAULIC OIL RETURN FILTER / PILOT FILTER
            <label htmlFor="pilot-fiter">OK</label>
            <input name="pilot-filter" type="checkbox" />
            <label htmlFor="pilot-filter">ATTN</label>
            <input name="pilot-filter" type="checkbox" />
          </div>

          <div>
            CHANGE HYDRAULIC OIL
            <label htmlFor="hydraulic-oil-change">OK</label>
            <input name="hydraulic-oil-change" type="checkbox" />
            <label htmlFor="hydraulic-oil-change">ATTN</label>
            <input name="hydraulic-oil-change" type="checkbox" />
          </div>

          <div>
            CHANGE FINAL DRIVE / DIFFERENTIAL OIL
            <label htmlFor="final-drive">OK</label>
            <input name="final-drive" type="checkbox" />
            <label htmlFor="final-drive">ATTN</label>
            <input name="final-drive" type="checkbox" />
          </div>

          <div>
            CLEAN FUEL / WATER SEPARATOR
            <label htmlFor="water-separator">OK</label>
            <input name="water-separator" type="checkbox" />
            <label htmlFor="water-separator">ATTN</label>
            <input name="water-separator" type="checkbox" />
          </div>
        </form>

        <label htmlFor="faults-damages">FAULTS / DAMAGES FOUND</label>
        <textarea id="faults-damages"  rows="4" cols="50">
        </textarea>

        <table>
          <thead>
            <tr>
              <td>EXTRA SERVICE VEHICLE STOCK/PARTS USED</td>
            </tr>
            <tr>
              <td>QTY</td>
              <td>PARTS NUMBER</td>
              <td>DESCRIPTION</td>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
          </tr>
          </tbody>
        </table>
        <div>
          <h2>OIL USUAGE</h2>
          <label htmlFor="oil-usuage-engine">ENGINE (15W40)</label>
          <input name="oil-usuage-engine" type="text" /> L
          <label htmlFor="oil-usuage-hydraulic">HYDRAULIC (68 GRADE)</label>
          <input name="oil-usuage-hydraulic" type="text" /> L
          <label htmlFor="oil-usuage-hydraulic">HYDRAULIC (68 GRADE)</label>
          <input name="oil-usuage-hydraulic" type="text" /> L
          <label htmlFor="oil-usuage-gear">GEAR (80W90)</label>
          <input name="oil-usuage-gear" type="text" /> L
        </div>

        <div>
          <label htmlFor="next-service-due">Next Service Due (HOURS)</label>
          <input name="next-service-due" type="textbox" />
        </div>

        <div>
          <label htmlFor="technician-name">Technician&apos;s Name</label>
          <input name="technician-name" type="textbox" />
        </div>

        <div>
          <label htmlFor="rep-name">Representative&apos;s Name</label>
          <input name="rep-name" type="text" />
          <label htmlFor="emplyee-no">Employee No</label>
          <input name="employee-no" type="text" />
        </div>
      </div>
    );
  }
}

export default App;
