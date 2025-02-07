//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LendingPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lendingPoolAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "provider",
        internalType: "contract IPoolAddressesProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "backer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "fee", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "BackUnbacked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "onBehalfOf",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "interestRateMode",
        internalType: "enum DataTypes.InterestRateMode",
        type: "uint8",
        indexed: false,
      },
      {
        name: "borrowRate",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "referralCode",
        internalType: "uint16",
        type: "uint16",
        indexed: true,
      },
    ],
    name: "Borrow",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "target",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "initiator",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "asset",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "interestRateMode",
        internalType: "enum DataTypes.InterestRateMode",
        type: "uint8",
        indexed: false,
      },
      {
        name: "premium",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "referralCode",
        internalType: "uint16",
        type: "uint16",
        indexed: true,
      },
    ],
    name: "FlashLoan",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "asset",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "totalDebt",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "IsolationModeTotalDebtUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "collateralAsset",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "debtAsset",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "debtToCover",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "liquidatedCollateralAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "liquidator",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "receiveAToken",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
    ],
    name: "LiquidationCall",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "onBehalfOf",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "referralCode",
        internalType: "uint16",
        type: "uint16",
        indexed: true,
      },
    ],
    name: "MintUnbacked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amountMinted",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "MintedToTreasury",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
    ],
    name: "RebalanceStableBorrowRate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "repayer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "useATokens",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
    ],
    name: "Repay",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "liquidityRate",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "stableBorrowRate",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "variableBorrowRate",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "liquidityIndex",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "variableBorrowIndex",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "ReserveDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
    ],
    name: "ReserveUsedAsCollateralDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
    ],
    name: "ReserveUsedAsCollateralEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "onBehalfOf",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "referralCode",
        internalType: "uint16",
        type: "uint16",
        indexed: true,
      },
    ],
    name: "Supply",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "interestRateMode",
        internalType: "enum DataTypes.InterestRateMode",
        type: "uint8",
        indexed: false,
      },
    ],
    name: "SwapBorrowRateMode",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "categoryId",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
    ],
    name: "UserEModeSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "user", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Withdraw",
  },
  {
    type: "function",
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        name: "",
        internalType: "contract IPoolAddressesProvider",
        type: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "BRIDGE_PROTOCOL_FEE",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "FLASHLOAN_PREMIUM_TOTAL",
    outputs: [{ name: "", internalType: "uint128", type: "uint128" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "FLASHLOAN_PREMIUM_TO_PROTOCOL",
    outputs: [{ name: "", internalType: "uint128", type: "uint128" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "MAX_NUMBER_RESERVES",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "POOL_REVISION",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "fee", internalType: "uint256", type: "uint256" },
    ],
    name: "backUnbacked",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "interestRateMode", internalType: "uint256", type: "uint256" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "id", internalType: "uint8", type: "uint8" },
      {
        name: "category",
        internalType: "struct DataTypes.EModeCategory",
        type: "tuple",
        components: [
          { name: "ltv", internalType: "uint16", type: "uint16" },
          {
            name: "liquidationThreshold",
            internalType: "uint16",
            type: "uint16",
          },
          { name: "liquidationBonus", internalType: "uint16", type: "uint16" },
          { name: "priceSource", internalType: "address", type: "address" },
          { name: "label", internalType: "string", type: "string" },
        ],
      },
    ],
    name: "configureEModeCategory",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "asset", internalType: "address", type: "address" }],
    name: "dropReserve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "balanceFromBefore", internalType: "uint256", type: "uint256" },
      { name: "balanceToBefore", internalType: "uint256", type: "uint256" },
    ],
    name: "finalizeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "receiverAddress", internalType: "address", type: "address" },
      { name: "assets", internalType: "address[]", type: "address[]" },
      { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      {
        name: "interestRateModes",
        internalType: "uint256[]",
        type: "uint256[]",
      },
      { name: "onBehalfOf", internalType: "address", type: "address" },
      { name: "params", internalType: "bytes", type: "bytes" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
    ],
    name: "flashLoan",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "receiverAddress", internalType: "address", type: "address" },
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "params", internalType: "bytes", type: "bytes" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
    ],
    name: "flashLoanSimple",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "asset", internalType: "address", type: "address" }],
    name: "getConfiguration",
    outputs: [
      {
        name: "",
        internalType: "struct DataTypes.ReserveConfigurationMap",
        type: "tuple",
        components: [
          { name: "data", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "id", internalType: "uint8", type: "uint8" }],
    name: "getEModeCategoryData",
    outputs: [
      {
        name: "",
        internalType: "struct DataTypes.EModeCategory",
        type: "tuple",
        components: [
          { name: "ltv", internalType: "uint16", type: "uint16" },
          {
            name: "liquidationThreshold",
            internalType: "uint16",
            type: "uint16",
          },
          { name: "liquidationBonus", internalType: "uint16", type: "uint16" },
          { name: "priceSource", internalType: "address", type: "address" },
          { name: "label", internalType: "string", type: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "id", internalType: "uint16", type: "uint16" }],
    name: "getReserveAddressById",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "asset", internalType: "address", type: "address" }],
    name: "getReserveData",
    outputs: [
      {
        name: "",
        internalType: "struct DataTypes.ReserveData",
        type: "tuple",
        components: [
          {
            name: "configuration",
            internalType: "struct DataTypes.ReserveConfigurationMap",
            type: "tuple",
            components: [
              { name: "data", internalType: "uint256", type: "uint256" },
            ],
          },
          { name: "liquidityIndex", internalType: "uint128", type: "uint128" },
          {
            name: "currentLiquidityRate",
            internalType: "uint128",
            type: "uint128",
          },
          {
            name: "variableBorrowIndex",
            internalType: "uint128",
            type: "uint128",
          },
          {
            name: "currentVariableBorrowRate",
            internalType: "uint128",
            type: "uint128",
          },
          {
            name: "currentStableBorrowRate",
            internalType: "uint128",
            type: "uint128",
          },
          {
            name: "lastUpdateTimestamp",
            internalType: "uint40",
            type: "uint40",
          },
          { name: "id", internalType: "uint16", type: "uint16" },
          { name: "aTokenAddress", internalType: "address", type: "address" },
          {
            name: "stableDebtTokenAddress",
            internalType: "address",
            type: "address",
          },
          {
            name: "variableDebtTokenAddress",
            internalType: "address",
            type: "address",
          },
          {
            name: "interestRateStrategyAddress",
            internalType: "address",
            type: "address",
          },
          {
            name: "accruedToTreasury",
            internalType: "uint128",
            type: "uint128",
          },
          { name: "unbacked", internalType: "uint128", type: "uint128" },
          {
            name: "isolationModeTotalDebt",
            internalType: "uint128",
            type: "uint128",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "asset", internalType: "address", type: "address" }],
    name: "getReserveNormalizedIncome",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "asset", internalType: "address", type: "address" }],
    name: "getReserveNormalizedVariableDebt",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getReservesList",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "getUserAccountData",
    outputs: [
      { name: "totalCollateralBase", internalType: "uint256", type: "uint256" },
      { name: "totalDebtBase", internalType: "uint256", type: "uint256" },
      {
        name: "availableBorrowsBase",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "currentLiquidationThreshold",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "ltv", internalType: "uint256", type: "uint256" },
      { name: "healthFactor", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "getUserConfiguration",
    outputs: [
      {
        name: "",
        internalType: "struct DataTypes.UserConfigurationMap",
        type: "tuple",
        components: [
          { name: "data", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "getUserEMode",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "aTokenAddress", internalType: "address", type: "address" },
      { name: "stableDebtAddress", internalType: "address", type: "address" },
      { name: "variableDebtAddress", internalType: "address", type: "address" },
      {
        name: "interestRateStrategyAddress",
        internalType: "address",
        type: "address",
      },
    ],
    name: "initReserve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "provider",
        internalType: "contract IPoolAddressesProvider",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "collateralAsset", internalType: "address", type: "address" },
      { name: "debtAsset", internalType: "address", type: "address" },
      { name: "user", internalType: "address", type: "address" },
      { name: "debtToCover", internalType: "uint256", type: "uint256" },
      { name: "receiveAToken", internalType: "bool", type: "bool" },
    ],
    name: "liquidationCall",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "args1", internalType: "bytes32", type: "bytes32" },
      { name: "args2", internalType: "bytes32", type: "bytes32" },
    ],
    name: "liquidationCall",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "assets", internalType: "address[]", type: "address[]" }],
    name: "mintToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
    ],
    name: "mintUnbacked",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "rebalanceStableBorrowRate",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "user", internalType: "address", type: "address" },
    ],
    name: "rebalanceStableBorrowRate",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "repay",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "interestRateMode", internalType: "uint256", type: "uint256" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
    ],
    name: "repay",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "interestRateMode", internalType: "uint256", type: "uint256" },
    ],
    name: "repayWithATokens",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "repayWithATokens",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "args", internalType: "bytes32", type: "bytes32" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "repayWithPermit",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "interestRateMode", internalType: "uint256", type: "uint256" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "permitV", internalType: "uint8", type: "uint8" },
      { name: "permitR", internalType: "bytes32", type: "bytes32" },
      { name: "permitS", internalType: "bytes32", type: "bytes32" },
    ],
    name: "repayWithPermit",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "token", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "asset", internalType: "address", type: "address" }],
    name: "resetIsolationModeTotalDebt",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      {
        name: "configuration",
        internalType: "struct DataTypes.ReserveConfigurationMap",
        type: "tuple",
        components: [
          { name: "data", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "setConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "rateStrategyAddress", internalType: "address", type: "address" },
    ],
    name: "setReserveInterestRateStrategyAddress",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "categoryId", internalType: "uint8", type: "uint8" }],
    name: "setUserEMode",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "setUserUseReserveAsCollateral",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "useAsCollateral", internalType: "bool", type: "bool" },
    ],
    name: "setUserUseReserveAsCollateral",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
    ],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "onBehalfOf", internalType: "address", type: "address" },
      { name: "referralCode", internalType: "uint16", type: "uint16" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "permitV", internalType: "uint8", type: "uint8" },
      { name: "permitR", internalType: "bytes32", type: "bytes32" },
      { name: "permitS", internalType: "bytes32", type: "bytes32" },
    ],
    name: "supplyWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "args", internalType: "bytes32", type: "bytes32" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "supplyWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "swapBorrowRateMode",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "interestRateMode", internalType: "uint256", type: "uint256" },
    ],
    name: "swapBorrowRateMode",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "protocolFee", internalType: "uint256", type: "uint256" }],
    name: "updateBridgeProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "flashLoanPremiumTotal",
        internalType: "uint128",
        type: "uint128",
      },
      {
        name: "flashLoanPremiumToProtocol",
        internalType: "uint128",
        type: "uint128",
      },
    ],
    name: "updateFlashloanPremiums",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "asset", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "to", internalType: "address", type: "address" },
    ],
    name: "withdraw",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "args", internalType: "bytes32", type: "bytes32" }],
    name: "withdraw",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
] as const;

export const lendingPoolAddress =
  "0x8F44Fd754285aa6A2b8B9B97739B79746e0475a7" as const;
