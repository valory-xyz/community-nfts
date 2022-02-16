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

To verify the oracle contract run (after updating `oracle_arguments.js` with the constructor arguments):
``` shell
npx hardhat verify --network avalanche DEPLOYED_CONTRACT_ADDRESS
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
			"description": "{NFT_NAME}"
		},
		"description": {
			"type": "string",
			"description": "{NFT_DESCRIPTION}"	
		},
        "image": {
            "type": "string",
            "description": "ipfs://{NFT_IPFS_HASH}"
        },
		"attributes":[{"trait_type":"{TYPE_A}","value":"{VALUE_A}"},]
	}
}
```

For `CommunityNFT` the `attributes` are: ?
For `AcademyNFT` the `attributes` are:
`version` of type `string`, `dateStart` of type `date`, `dateFinish` of type `date`, `participant` of type `int` where this is the tokenId the participant in `CommunityNFT`, `instructors` of type `List[int]` where these are the tokenId of the instructors in `CommunityNFT`.

