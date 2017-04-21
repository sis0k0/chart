import { Component } from "@angular/core";
import { ObservableArray } from "data/observable-array";

class Country {
    constructor(public Country?: string, public Amount?: number, public SecondVal?: number, public ThirdVal?: number, public Impact?: number, public Year?: number) {
    }
}

@Component({
    selector: "ns-app",
    template: `
        <RadCartesianChart id="cartesianChart" tkExampleTitle tkToggleNavButton>
            <CategoricalAxis tkCartesianHorizontalAxis></CategoricalAxis>
            <LinearAxis tkCartesianVerticalAxis id="verBarAxis"></LinearAxis>

            <BarSeries tkCartesianSeries [items]="categoricalSource" categoryProperty="Country" valueProperty="Amount"></BarSeries>
            <!-- >> chart-angular-plot-band-annotations -->
            <ChartPlotBandAnnotation tkCartesianAnnotations axisId="verBarAxis" minValue="2" maxValue="4" zPosition="AboveSeries" strokeWidth="2"
                fillColor="#DDFFFF00" strokeColor="Red" strokeDashPattern="3,3,5,5"></ChartPlotBandAnnotation>
            <!-- << chart-angular-plot-band-annotations -->
        </RadCartesianChart>
    `
})
export class AppComponent {
    private _categoricalSource: ObservableArray<Country>;

    constructor() { }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray([
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ]);
    }
}
