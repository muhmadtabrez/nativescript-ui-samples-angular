import { Injectable } from '@angular/core';
import * as mock from "./mock-data";
import { Country } from "./country";
import { Product } from "./product";
import { Person } from "./person";
import { Currency } from './currency';
import { Car } from './car';

@Injectable()
export class DataService {
    getCategoricalSource(): Country[] {
        return mock.CATEGORICALSOURCE;
    }

    getCategoricalSource2(): Country[] {
        return mock.CATEGORICALSOURCE2;
    }

    getCategoricalSource3(): Country[] {
        return mock.CATEGORICALSOURCE3;
    }

    getBubbleCategoricalSource(): Country[] {
        return mock.BUBBLECATEGORICALSOURCE;
    }

    getFirstSeries(): Country[] {
        return mock.FIRSTSERIES;
    }

    getSecondSeries(): Country[] {
        return mock.SECONDSERIES;
    }

    getThirdSeries(): Country[] {
        return mock.THIRDSERIES;
    }

    getRangeBarSource(): Product[] {
        return mock.RANGEBARSOURCE;
    }

    getHighDataModel(): Country[] {
        return mock.HIGHDATAMODEL;
    }

    getMiddleDataModel(): Country[] {
        return mock.MIDDLEDATAMODEL;
    }

    getLowDataModel(): Country[] {
        return mock.LOWDATAMODEL;
    }

    getScatterSource(): Person[] {
        return mock.SCATTERSOURCE;
    }

    getCandleStickSourceItems(): Currency[] {
        return mock.CANDLESTICKSOURCEITEMS;
    }

    getOhlcSourceItems(): Currency[] {
        return mock.OHLCSOURCEITEMS;
    }

    getPieSource(): Car[] {
        return mock.PIESOURCE;
    }
}