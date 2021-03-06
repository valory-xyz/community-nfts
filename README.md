# Community NFTs for Autonolas

Try running some of the following tasks:

```shell
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js
```

To deloy:

- Update `private_key_here` and `api_key_here` in `hardhat.config.js` with your keys.
- Update constructor arguments of contracts
- Run:

```
npx hardhat run scripts/deploy.js --network avalanche
```

To verify the oracle contract run:
``` shell
npx hardhat verify --contract contracts/AcademyNFT.sol:AcademyNFT --network avalanche DEPLOYED_CONTRACT_ADDRESS
npx hardhat verify --contract contracts/AcademyNFT.sol:CommunityNFT --network avalanche DEPLOYED_CONTRACT_ADDRESS
```

## A note on metadata

The metadata should contain the appropriate uri of the form: `ipfs/{hash}`.

```json
{
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this NFT represents"
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this NFT represents"
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
        }
    }
}
```

For `CommunityNFT` an example is:
```json
{"image":"ipfs://{NFT_IPFS_HASH}","attributes":[],"names":"{NFT_NAME}","description":"{NFT_DESCRIPTION}"}
```

For `AcademyNFT` the `attributes` are:
`cohortNumber` of type `string`, `dateStart` of type `date`, `dateFinish` of type `date`.
```json
{"image":"ipfs://{NFT_IPFS_HASH}","attributes":[{"trait_type":"cohortNumber","value":"{COHORT_NUMBER}"},{"trait_type":"dateStart","value":"{DATE_START}"},{"trait_type":"dateEnd","value":"{DATE_END}"}],"names":"{NFT_NAME}","description":"{NFT_DESCRIPTION}"}
```

AcademyNFT deployed to: `0x8f36fF50a331e638aa510f092b5448A03D432611`
CommunityNFT deployed to: `0x953B391477177e551BE82d6Fd3ee5F48AAb951dc`

## Deployed instances:

https://snowtrace.io/address/0x8f36fF50a331e638aa510f092b5448A03D432611#code
https://snowtrace.io/address/0x953B391477177e551BE82d6Fd3ee5F48AAb951dc#code
