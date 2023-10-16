/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { SmartAccountFactory, SmartAccountFactoryInterface } from '../../contracts/SmartAccountFactory'

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IEntryPoint',
        name: '_entryPoint',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_handler',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'accountImplementation',
    outputs: [
      {
        internalType: 'contract SmartAccount',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'validators',
        type: 'address[]',
      },
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
      {
        internalType: 'uint256',
        name: 'salt',
        type: 'uint256',
      },
    ],
    name: 'createAccount',
    outputs: [
      {
        internalType: 'contract SmartAccount',
        name: 'ret',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'validators',
        type: 'address[]',
      },
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
      {
        internalType: 'uint256',
        name: 'salt',
        type: 'uint256',
      },
    ],
    name: 'getAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'handler',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

const _bytecode =
  '0x60c0346100f4576001600160401b0390601f612d5038819003918201601f1916830191848311848410176100de5780849260409485528339810103126100f45780516001600160a01b038082169290918390036100f4576020015190811681036100f45760a052604051916122f490818401908111848210176100de576020928492610a5c843981520301906000f080156100d25760805260405161096290816100fa823960805181818160fd015281816103e401526104d6015260a051818181606c0152818161037901526104830152f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816311464fbe146100de5750806340d513b8146100c157806397657715146100935763c80916d41461004d57600080fd5b3461009057806003193601126100905760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b80fd5b50346100905760206100b06100a73661015b565b93929092610437565b6001600160a01b0360405191168152f35b50346100905760206100b06100d53661015b565b93929092610342565b9050346101215781600319360112610121576020906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b5080fd5b9181601f840112156101565782359167ffffffffffffffff8311610156576020808501948460051b01011161015657565b600080fd5b60606003198201126101565767ffffffffffffffff91600435838111610156578261018891600401610125565b93909392602435918211610156576101a291600401610125565b909160443590565b90949192939460608201946001600160a01b03809216835280602096606088860152526080830194916000905b8282106102815750505050604081840391015280825282820192808260051b8401019480946000915b848310610211575050505050505090565b90919293949596601f19808883030184528835601e1984360301811215610156578301868101903567ffffffffffffffff811161015657803603821361015657838893601f83808796879660019a5286860137600085828601015201160101990193019301919594939290610200565b909192969495873590828216809203610156579081529496948701959487019291600101906101d7565b90601f8019910116810190811067ffffffffffffffff8211176102cd57604052565b634e487b7160e01b600052604160045260246000fd5b60005b8381106102f65750506000910152565b81810151838201526020016102e6565b90916001600160a01b036060931682526040602083015261033681518092816040860152602086860191016102e3565b601f01601f1916010190565b91939290936103548483838887610437565b803b61042557506103af92916103a19160405196879463d561e48960e01b60208701527f0000000000000000000000000000000000000000000000000000000000000000602487016101aa565b03601f1981018452836102ab565b604051610403928382019382851067ffffffffffffffff8611176102cd57829161040a9161055384396001600160a01b0395867f00000000000000000000000000000000000000000000000000000000000000001690610306565b03906000f58015610419571690565b6040513d6000823e3d90fd5b6001600160a01b031695945050505050565b92600b9361052e61053a6055979495610403936040978851916104ab6020988995610464878b01876102ab565b898652868601996105538b398c5163d561e48960e01b888201529485947f0000000000000000000000000000000000000000000000000000000000000000602487016101aa565b036104be601f19918281018452836102ab565b6105088a5191826104fc878201956001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001687610306565b039081018352826102ab565b895195869361051f868601998a92519283916102e3565b840191518093868401906102e3565b010380845201826102ab565b5190208351938401528201523081520160ff8153209056fe604060808152610403908138038061001681610218565b93843982019181818403126102135780516001600160a01b038116808203610213576020838101516001600160401b0394919391858211610213570186601f820112156102135780519061007161006c83610253565b610218565b918083528583019886828401011161021357888661008f930161026e565b813b156101b9577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b031916841790556000927fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a28051158015906101b2575b61010b575b855160be90816103458239f35b855194606086019081118682101761019e578697849283926101889952602788527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c87890152660819985a5b195960ca1b8a8901525190845af4913d15610194573d9061017a61006c83610253565b91825281943d92013e610291565b508038808080806100fe565b5060609250610291565b634e487b7160e01b84526041600452602484fd5b50826100f9565b855162461bcd60e51b815260048101859052602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761023d57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161023d57601f01601f191660200190565b60005b8381106102815750506000910152565b8181015183820152602001610271565b919290156102f357508151156102a5575090565b3b156102ae5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156103065750805190602001fd5b6044604051809262461bcd60e51b825260206004830152610336815180928160248601526020868601910161026e565b601f01601f19168101030190fdfe60806040523615605f5773ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e15605b573d90f35b3d90fd5b73ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54166000808092368280378136915af43d82803e15605b573d90f3fea164736f6c6343000813000aa164736f6c6343000813000a60a0346200015457601f620022f438819003918201601f19168301916001600160401b0383118484101762000159578084926020946040528339810103126200015457516001600160a01b0381168103620001545760805260005460ff8160081c16620000ff5760ff80821603620000c3575b60405161218490816200017082396080518181816101c9015281816103ce015281816104f10152818161058c0152818161087301528181610d2401528181610d6401528181610e850152610f500152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a13862000072565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001a575b3415611bc6575b600080fd5b60003560e01c80633a871cdd1461018a5780633d6767f81461018557806347e1da2a146101805780634a58db191461017b5780634d44560d146101765780635a438970146101715780635faac46b1461016c5780636dd3bf741461016757806375f2516714610162578063856dfd991461015d5780639229e12014610158578063a28b34c414610153578063ad05234a1461014e578063b0d691fe14610149578063b61d27f614610144578063bb6aa2b41461013f578063c399ec881461013a578063cf777df914610135578063d087d28814610130578063d2b0e7791461012b578063d561e48914610126578063f08a0323146101215763fa8490150361000e5761122a565b6111a6565b61107c565b610fba565b610f1d565b610ef6565b610e59565b610d99565b610d48565b610d04565b610c28565b610a9a565b61095f565b6108f1565b6108c0565b610857565b61070b565b6105ec565b61055a565b6104da565b61035d565b6102f9565b3461001557600319606036820112610015576004359067ffffffffffffffff821161001557610160908236030112610015576044356001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633036102385761020261021a9260243590600401611745565b908061021e575b506040519081529081906020820190565b0390f35b600080808093338219f15061023161148c565b5038610209565b60405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606490fd5b6001600160a01b0381160361001557565b9181601f840112156100155782359167ffffffffffffffff8311610015576020838186019501011161001557565b906040600319830112610015576004356102d58161027d565b916024359067ffffffffffffffff8211610015576102f59160040161028e565b9091565b3461001557610307366102bc565b9030330361031a5761031892611c5c565b005b60405163d97d09c160e01b8152600490fd5b9181601f840112156100155782359167ffffffffffffffff8311610015576020808501948460051b01011161001557565b3461001557606036600319011261001557600467ffffffffffffffff81358181116100155761038f903690840161032c565b9092602435838111610015576103a8903690830161032c565b9093604435908111610015576103c1903690840161032c565b9490926001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633036104c0578585148015906104ac575b61049d57508161045157505060005b82811061041757005b8061044b61043061042b600194878a611544565b611559565b61044561043e848988611596565b3691611682565b90611893565b0161040e565b91909460009493945b85811061046357005b8061049761047761042b6001948a87611544565b610482838b89611544565b3561049161043e858b8a611596565b91611a1e565b0161045a565b60405163150072e360e11b8152fd5b5082151580156103ff5750858314156103ff565b60405163cb10477360e01b8152fd5b600091031261001557565b600080600319360112610557576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681813b156105575760405163b760faf960e01b8152306004820152918290602490829034905af1801561055257610546575080f35b61054f9061141a565b80f35b611464565b80fd5b346100155760006040366003190112610557576004356105798161027d565b30330361031a57816001600160a01b03807f00000000000000000000000000000000000000000000000000000000000000001692833b156105e85760449083604051958694859363040b850f60e31b855216600484015260243560248401525af1801561055257610546575080f35b8280fd5b34610015576105fa366102bc565b9130330361031a57806106146001600160a01b0392611ded565b1690813b156100155760405190633cbcc2b960e21b8252818061063e60009687946004840161181b565b038183865af180156105525761067e575b5060207fcc87bd27eafb647c2f20f074fcdd0fe8d9c2171b9876dacd94c4a62149d4fe0391604051908152a180f35b7fcc87bd27eafb647c2f20f074fcdd0fe8d9c2171b9876dacd94c4a62149d4fe0391926106ac60209261141a565b92915061064f565b90929192604082016040835281518091526060830160208093019160005b848282106106ee575050506001600160a01b0391509416910152565b84516001600160a01b0316845293840193909201916001016106d2565b34610015576040366003190112610015576004356107288161027d565b6024359061073582611cea565b6107426040519182611433565b828152601f1961075184611cea565b013660208301376000926001600160a01b0380931684526003602052610782604085206001600160a01b0390541690565b838116801515908161080f575b5080610806575b156107f3576107e76107da826107c16107ed946107b38a89611d02565b906001600160a01b03169052565b6001600160a01b03166000526003602052604060002090565b546001600160a01b031690565b94611d16565b93610782565b8285815261021a604051928392836106b4565b50818510610796565b6001915014153861078f565b6060600319820112610015576004356108338161027d565b91602435916044359067ffffffffffffffff8211610015576102f59160040161028e565b34610015576108653661081b565b6001600160a01b03939291937f00000000000000000000000000000000000000000000000000000000000000001633036108ae57610318936108a8913691611682565b91611baf565b60405163cb10477360e01b8152600490fd5b346100155760203660031901126100155760206108e76004356108e28161027d565b611d3b565b6040519015158152f35b346100155760003660031901126100155760207f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4546001600160a01b0360405191168152f35b60409060031901126100155760043561094f8161027d565b9060243561095c8161027d565b90565b346100155761096d36610937565b9030330361031a576001600160a01b03808316809181151580610a8f575b61099490611da1565b80841660005260036020526040600020541603610a4a57610a41610a31846107c1602095610a166109fc6107da7fae2356b2cb822c142448e45b195255df334895b014113d50bb822c311cddc8559a6001600160a01b03166000526003602052604060002090565b916001600160a01b03166000526003602052604060002090565b906001600160a01b03166001600160a01b0319825416179055565b6001600160a01b03198154169055565b604051908152a1005b60405162461bcd60e51b815260206004820152601960248201527f6974656d20616e64207072656974656d206d69736d61746368000000000000006044820152606490fd5b50600182141561098b565b3461001557606036600319011261001557600435610ab78161027d565b60243590610ac48261027d565b604435610ad08161027d565b30330361031a576001600160a01b0381169260405163e445e7dd60e01b80825260209182816004818a5afa90811561055257600091610c0b575b50610b1481611873565b610b8d57505050610b2491612035565b803b156100155760405162d638f360e41b815260008160048183865af1801561055257610b74575b507fa20b2dba0769450542a688d94941808255eb735da2fa53df12ff98fc529ffd4e600080a2005b80610b81610b879261141a565b806104cf565b38610b4c565b6040519081528181600481895afa90811561055257600192600092610bde575b5050610bb881611873565b03610bcc57610bc792506120d6565b610b24565b610bd982610bc794612035565b6120d6565b610bfd9250803d10610c04575b610bf58183611433565b81019061185b565b3880610bad565b503d610beb565b610c229150833d8511610c0457610bf58183611433565b38610b0a565b3461001557604036600319011261001557600435610c458161027d565b60243590610c5282611cea565b610c5f6040519182611433565b828152601f19610c6e84611cea565b013660208301376000926001600160a01b0380931684526004602052610c9f604085206001600160a01b0390541690565b8381168015159081610cf8575b5080610cef575b156107f3576107e76107da82610cd0610ce9946107b38a89611d02565b6001600160a01b03166000526004602052604060002090565b93610c9f565b50818510610cb3565b60019150141538610cac565b346100155760003660031901126100155760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b3461001557610d563661081b565b6001600160a01b03939291937f00000000000000000000000000000000000000000000000000000000000000001633036108ae5761031893610491913691611682565b3461001557610da7366102bc565b91610db8610db433611d6e565b1590565b610e4157610dc8610db482611d3b565b610e1e576001600160a01b031691823b1561001557610e01926000928360405180968195829463064acaab60e11b84526004840161181b565b03925af1801561055257610e1157005b80610b816103189261141a565b60405163304106bf60e11b81526001600160a01b03919091166004820152602490fd5b60405163a841d6f560e01b8152336004820152602490fd5b34610015576000366003190112610015576040516370a0823160e01b81523060048201526020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561055257602091600091610ec9575b50604051908152f35b610ee99150823d8111610eef575b610ee18183611433565b810190611455565b38610ec0565b503d610ed7565b346100155760203660031901126100155760206108e7600435610f188161027d565b611d6e565b3461001557600036600319011261001557604051631aab3f0d60e11b8152306004820152600060248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156105525761021a91600091610f9c57506040519081529081906020820190565b610fb4915060203d8111610eef57610ee18183611433565b38610209565b3461001557610fc836610937565b9030330361031a576001600160a01b03808316809181151580611071575b610fef90611da1565b80841660005260046020526040600020541603610a4a57610a41610a3184610cd0602095610a166110576107da7f779fb1c42fad72db3b3d13498dce770027f44544e8a1a5a9e06e530db8cd68929a6001600160a01b03166000526004602052604060002090565b916001600160a01b03166000526004602052604060002090565b506001821415610fe6565b34610015576060366003190112610015576004356110998161027d565b67ffffffffffffffff602435818111610015576110ba90369060040161032c565b90604435928311610015576110d661111a93369060040161032c565b929091600054956110fe60ff8860081c161580988199611198575b8115611178575b506114bc565b86611111600160ff196000541617600055565b61115f576115ad565b61112057005b61113061ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b61117361010061ff00196000541617600055565b6115ad565b303b1591508161118a575b50386110f8565b6001915060ff161438611183565b600160ff82161091506110f1565b34610015576020366003190112610015576004356111c38161027d565b30330361031a577f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d454906111f681611c17565b6001600160a01b0380911691167f06be9a1bea257286cf2afa8205ed494ca9d6a4b41aa58d04238deebada20fb0c600080a3005b3461001557611238366102bc565b9030330361031a576040516301ffc9a760e01b81526329c791d960e01b60048201526001600160a01b03841693906020908181602481895afa908115610552576000916113d7575b50156113c55760405163e445e7dd60e01b8082529082816004818a5afa908115610552576000916113a8575b506112b681611873565b61133b5750506112c590611e81565b823b15610015576040516313861fb560e01b815291600091839182916112ef91906004840161181b565b038183865af1801561055257611328575b507fe9fdf38cc72369bf1f90f6adc9835796c285cba93070412e0e48413e63c5b908600080a2005b80610b816113359261141a565b38611300565b6040519081528181600481895afa9081156105525760019260009261138b575b505061136681611873565b036113795761137490611f22565b6112c5565b8061138661137492611e81565b611f22565b6113a19250803d10610c0457610bf58183611433565b388061135b565b6113bf9150833d8511610c0457610bf58183611433565b386112ac565b604051639c9d882360e01b8152600490fd5b6113f79150823d84116113fd575b6113ef8183611433565b810190611843565b38611280565b503d6113e5565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161142e57604052565b611404565b90601f8019910116810190811067ffffffffffffffff82111761142e57604052565b90816020910312610015575190565b6040513d6000823e3d90fd5b67ffffffffffffffff811161142e57601f01601f191660200190565b3d156114b7573d9061149d82611470565b916114ab6040519384611433565b82523d6000602084013e565b606090565b156114c357565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608490fd5b634e487b7160e01b600052603260045260246000fd5b91908110156115545760051b0190565b61152e565b3561095c8161027d565b903590601e1981360301821215610015570180359067ffffffffffffffff82116100155760200191813603831361001557565b90821015611554576102f59160051b810190611563565b9390929193818503611670576115c290611c17565b600160008190527fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c80546001600160a01b0319908116831790915560046020527fabd6e7cb50984ff9c2f3e18a2660c3353dadf4e3291deeb275dae2cd1e44fe058054909116821790559360005b81811061163f57505050505050565b8061166a61164f88938589611544565b356116598161027d565b611664838789611596565b91611c5c565b01611630565b60405163150072e360e11b8152600490fd5b92919261168e82611470565b9161169c6040519384611433565b829481845281830111610015578281602093846000960137010152565b919082519283825260005b8481106116e5575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016116c4565b6060906001600160a01b0361095c94931681526000602082015281604082015201906116b9565b61095c93926001600160a01b03606093168252602082015281604082015201906116b9565b611753610140820182611563565b81016040828203126100155781359161176b8361027d565b60208101359067ffffffffffffffff8211610015570181601f82011215610015576001600160a01b03918160206117a493359101611682565b91166117b2610db482611d3b565b611812576117e49360006117c7602095611559565b604051634b8b026360e11b81529687958694859360048501611720565b03925af1908115610552576000916117fa575090565b61095c915060203d8111610eef57610ee18183611433565b50505050600190565b90918060409360208452816020850152848401376000828201840152601f01601f1916010190565b90816020910312610015575180151581036100155790565b90816020910312610015575160038110156100155790565b6003111561187d57565b634e487b7160e01b600052602160045260246000fd5b60016000819052602052906118c77fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f6107da565b6001600160a01b03811690600182111561195057813b1561001557604051632b668a3760e21b8152916000908390818381611906898b600484016116f9565b03925af190811561055257611938926107da9261193d575b506001600160a01b03166000526001602052604060002090565b6118c7565b80610b8161194a9261141a565b3861191e565b505061195c8183611b87565b6001600052600260205261198f7fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e06107da565b6001600160a01b038116906001821115611a1857813b1561001557604051632b668a3760e21b81529160009083908183816119ce898b600484016116f9565b03925af190811561055257611a00926107da92611a05575b506001600160a01b03166000526002602052604060002090565b61198f565b80610b81611a129261141a565b386119e6565b50505050565b600160008190526020529291611a537fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f6107da565b6001600160a01b038116906001821115611ac957813b1561001557604051632b668a3760e21b8152916000908390818381611a93898b8e60048501611720565b03925af190811561055257611ac4926107da9261193d57506001600160a01b03166000526001602052604060002090565b611a53565b5050611ad6818386611baf565b60016000526002602052611b097fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e06107da565b6001600160a01b038116906001821115611b7f57813b1561001557604051632b668a3760e21b8152916000908390818381611b49898b8e60048501611720565b03925af190811561055257611b7a926107da92611a0557506001600160a01b03166000526002602052604060002090565b611b09565b505050509050565b600091829182602083519301915af1611b9e61148c565b9015611ba75750565b602081519101fd5b916000928392602083519301915af1611b9e61148c565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d4548015610318576000808092368280373360601b3652818060143601925af13d82803e15611c13573d90f35b3d90fd5b6001600160a01b03811615611c4a577f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d455565b6040516303988b8160e61b8152600490fd5b6001600160a01b0390611c6e81611fc3565b1690813b156100155760405163064acaab60e11b81529260009184918291611c9a91906004840161181b565b038183855af1908115610552577f702ed4645b59645b8a8b7dd88e069cb684a1170094eca847038827e03c1107a492602092611cdb575b50604051908152a1565b611ce49061141a565b38611cd1565b67ffffffffffffffff811161142e5760051b60200190565b80518210156115545760209160051b010190565b6000198114611d255760010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038091169081600114159182611d5757505090565b909150600052600360205260406000205416151590565b6001600160a01b038091169081600114159182611d8a57505090565b909150600052600460205260406000205416151590565b15611da857565b60405162461bcd60e51b815260206004820152601e60248201527f6974656d2063616e2774206265207a65726f206f722073656e74696e656c00006044820152606490fd5b6001600160a01b039081811680151580611e76575b611e0b90611da1565b6000818152600460205283604082205416611a1857611e54604092611e7495600184528484205416908352838320906001600160a01b03166001600160a01b0319825416179055565b6001815220906001600160a01b03166001600160a01b0319825416179055565b565b506001811415611e02565b6001600160a01b039081811680151580611f17575b611e9f90611da1565b600090808252600160205283604083205416611a1857604082611e74956001611ee79552828220541692815220906001600160a01b03166001600160a01b0319825416179055565b600160008190526020527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f610a16565b506001811415611e96565b6001600160a01b039081811680151580611fb8575b611f4090611da1565b600090808252600260205283604083205416611a1857604082611e74956001611f889552828220541692815220906001600160a01b03166001600160a01b0319825416179055565b600160005260026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0610a16565b506001811415611f37565b6001600160a01b03908181168015158061202a575b611fe190611da1565b6000818152600360205283604082205416611a1857611e54604092611e7495600184528484205416908352838320906001600160a01b03166001600160a01b0319825416179055565b506001811415611fd8565b6001600160a01b0391828116801515806120cb575b61205390611da1565b8383166000526001602052836040600020541603610a4a576120b2610a3192610a16611e7495612096856001600160a01b03166000526001602052604060002090565b5416916001600160a01b03166000526001602052604060002090565b6001600160a01b03166000526001602052604060002090565b50600181141561204a565b6001600160a01b03918281168015158061216c575b6120f490611da1565b8383166000526002602052836040600020541603610a4a57612153610a3192610a16611e7495612137856001600160a01b03166000526002602052604060002090565b5416916001600160a01b03166000526002602052604060002090565b6001600160a01b03166000526002602052604060002090565b5060018114156120eb56fea164736f6c6343000813000a'

type SmartAccountFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: SmartAccountFactoryConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class SmartAccountFactory__factory extends ContractFactory {
  constructor(...args: SmartAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _entryPoint: string,
    _handler: string,
    overrides?: Overrides & { from?: string },
  ): Promise<SmartAccountFactory> {
    return super.deploy(_entryPoint, _handler, overrides || {}) as Promise<SmartAccountFactory>
  }
  override getDeployTransaction(
    _entryPoint: string,
    _handler: string,
    overrides?: Overrides & { from?: string },
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, _handler, overrides || {})
  }
  override attach(address: string): SmartAccountFactory {
    return super.attach(address) as SmartAccountFactory
  }
  override connect(signer: Signer): SmartAccountFactory__factory {
    return super.connect(signer) as SmartAccountFactory__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): SmartAccountFactoryInterface {
    return new utils.Interface(_abi) as SmartAccountFactoryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SmartAccountFactory {
    return new Contract(address, _abi, signerOrProvider) as SmartAccountFactory
  }
}
