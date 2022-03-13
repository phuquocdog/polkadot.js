// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

import { PHUQUOCDOG_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint
export function createPhuQuocDog (t: TFunction): EndpointOption {
  return {
    dnslink: 'phuquocdog',
    genesisHash: PHUQUOCDOG_GENESIS,
    info: 'phuquocdog',
    text: 'Phu Quoc Dog',
    providers: {
      Parity: 'wss://rpc.phuquoc.dog',
      OnFinality: 'wss://rpc.phuquoc.dog',
      // 'Geometry Labs': 'wss://polkadot.geometry.io/websockets', // https://github.com/polkadot-js/apps/pull/6746
      Dwellir: 'wss://rpc.phuquoc.dog',
      'light client': 'light://substrate-connect/polkadot'
      // Pinknode: 'wss://rpc.pinknode.io/polkadot/explorer' // https://github.com/polkadot-js/apps/issues/5721
    },
    linked: [
    ]
  };
}
