
import { Product } from '../Product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    showProductCode1: boolean;
    showProductCode2: boolean;
    currentProduct: Product;
    products: Product[];
    showTextCode: string;
}

const initialState: ProductState = {
    showProductCode: true,
    showProductCode1: false,
    showProductCode2: true,
    currentProduct: null,
    showTextCode: '',
    products: []
};

// const getProductFeatureState = createFeatureSelector<ProductState>('products');

// export const getShowProductCode = createSelector(
//     getProductFeatureState,
//     state => {
//         state.showProductCode1
// );

// export const getCurrentProduct = createSelector(
//     getProductFeatureState,
//     state => state.currentProduct
// );

// export const getProducts = createSelector(
//     getProductFeatureState,
//     state => state.products
// );

export function reducer(state = initialState, action): ProductState {
    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state,
                showProductCode: action.payload
            };
        case 'TOGGLE_PRODUCT_CODE1':
            return {
                ...state,
                showProductCode1: action.payload
            };
        case 'TOGGLE_PRODUCT_CODE2':
            return {
                ...state,
                showProductCode2: action.payload
            };
            case 'TOGGLE_PRODUCT_TEXTCODE':
            return {
                ...state,
                showTextCode: action.payload
            };
        default:
            return state;
    }
}
