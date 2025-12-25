const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'yourScratchExtension',

            // name that will be displayed in the Scratch UI
            name: 'Minecraft RPi',

            // colours to use for your extension blocks
         //   color1: '#000099',
         //   color2: '#660066',

            // icons to display
            blockIconURI: 'data:image/png;base64,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',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAABsFBMVEUDAwQDAwQDAwMDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQDAwQJEg0GCgkFCAcJDAsYNiAjUysnXDAYNR4NGxEzezs5i0E3h0EpYzEWMh0QIxUhTCgvczY1gj4PIBNCpEhFrUo+mUUfSSdBoEcdQyUvcDhAnUZAn0cwdTkRJhc8k0MmWS0tazUoXjA4iD8LFg8nXi43hj8aOyEucDY2gj8TKxkoYS8/m0cubTceRicSKRQfSCcfSCYYOB4MBggYCQ4sDRhEEiJbFCtjDypREyY9ER8pCxYTCAwIBAccChA0EBxLEyURBguDGjurHEq4HU7DHVLNHVW8HVCbHERzGDUtDxkjCxONHECzHU2TG0GkHEhlFjCKGj6pGEdrGDM6EB5mFzAzDhqhHEZ5GDc6Dx1rFjFTFCh7GjmBFzhbGC0aBg2iF0RfGC9DDyB1GzfBH1JhGC6xH02vH0x8FjdMFSdiFC1KDiJQDiRADx+BEzdpEi5zEzJwflVDAAAAH3RSTlMBDBszPCRETBRsm73ErI1le9vs9FzM1eSULKRUc7WF1PnyDgAAFj9JREFUeNrs221bokoYB3BQfCjNElR0e7iHMQpILWNM1wztWLae456z+/2/zFFQIR4EfRPsNb9XRjnX5b/bYbhhGIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKGonNpXmOC6dYQ96cybNZXPZdP7PjYc7Oi4Ul05Kp7mzQpkXBIEvF0u5FLOXTOW4uHozAF8t5Y5KJ8WlwvERxzJ/itRRkQd/tVJ6j8SPy+CPL56m/oyqqlRhB7Gey3KNkMrIN7hs7hsPO1TPk15d+Uw6eyxAKL5az7KBg2SPqzyE4ktcI5NPaEE1zkuFmshDREKhwvpGVSkKUYfgxVqhXkknrcQaFwUR9iRcZr2R5woC7IkvnqWZ5EjXRTgEX3JN05k6f9hA37JMMqSuRDhUkWMcckU4FF/PJKKsCgCHK1eYDfbICv3w3GMvW4MIEEIS+BI3abFXPPjCTdSMlHuWiTmuDP7QtXxzI98qZkaKqt2prTbakRZbEsCH1Ll/6GqqYr5+NMdso6C0Yl5bqQL4U7o6WdJ76pMC0OmbP3QHUlBa7JUAXrj9fUiWnjuAlXu1Z405QuCvkGLi7AwCvPTImm6MFUldv54o5nfSlVaOYY5cWZl/g8ZDYhph5dUgG39NwZ9wwcRYpgYuWEIISRgkWSdbmmyQNVUBpauNFQwO5XROBAf8+Ka9vwCabMYwWgbZGrYBJDSdIoTBpRrn0qqAU7MzG3+oP378UCdye9YnvkZo3ifEkBE4FGvggFbZ6jMrKy9tPvtb/aEZWvfhbfYogYOQY+KrBFtYkdV/dLKh90mAj4U18XQgQGdkDqMGZEX0oW6/7o0GCGxnTGyxJ3ZVyYZO9qLdYvCB2xrZi/4+sweqs0kIq62TfRkzDB54ZpB93SHYOElEWEqX7M24Bo/2/lnpr5KjshIxZ3UOSEt7AZeOtn9WN81EzFlMJfhzjsaLO3vCD9BF8AlSw5IZag/jie480mom5GzYKIPttvcph4GCOoPW+zPZ5RWDA5Z3ptvXWoMXhDoT4qCipKyz2BLY8Jg46ZrcwRjN5e6OvIZtcJj3diT1/tZGGKR5yyAOvTk4XDBxlqmCTdHIZ0ZrjgHQvBW8rFCbsCU9kCC91i3CAM3bhyH5pIWTc23I5ESwyT4fsoMBsHL/HrTCnMFWu09s7hpdhXn70HdX5jxBXQeGvQRbp0c8jLECS+gpIC5VgjW8CIrKHAHPP/p+77Z9Y5l4a4hga6rEhzZoWnFpxMfzHNaUHvFhWFGB0vqHeMngUEsx8XYOTm/Ejz6aY+vzDonXGNZ+Eq/+pINhqflT8x25DQ5ClmGS0tDCGN/rxFfPajLg264e/E36IB7azPwlfhn5D9z/F2MMW6dMvJVgQ7kZyxoJoKsvGJamr57iMqZgQnfEZrcKl5pPBgmgjm+eJNg4S0xYf5OdDKulLM00dySdgCnLWMegLPSdAyuJCesCNsZkN72FYOVFdR3/F0yKawL/q40jtWy0aWK+hud7NGlUq4amCz1CWOojrEj3Q7LbB07MBJ/mHeuGMJpVLKil+4XV+xTBFOw/3aV/DRtig4m3fNUurV7Ufl/TGUFPARPSiG2BrABHJMxCgo0Cy8RcHTbMhUOI4ZOdlnvpMHFmFbVHdqfEv5llywqwIY3D0+rfu9LS/4O1a92V1YtGwhhz2OLTTNyxBdiS5H7UtNDCbqC7Jz11GjUrbZ6IS0PbuQBb+GcvalpTK5rnW9iaG1Z8j1GzUjtg4zkm/tgTcJh3w9N6wts29HCA3b3W3jxiVv03BA51xpaE3rJdMcHshK6fyV0bgytq/Zd56PGOhNAH2HXnPhFyPGwpskFC9dpWg2qAwAUNrqWId9b0xRxsIhe0QYM7r1Qq5+nYZFmx0/qpR78HFgx9JxEYj3ZW5wHPBV+KAqwI5ZNKKm6NmkeDRKFOYQfpNVLkXbT7qrBREsGpdpVhYoATYGPQJ1FMmhDsl2uM0DtDfIPxyB+VwSSIoiiAqXyRj8tFj70yDaf/gkBzI9IIMoaNIustq2/CKqhqvZJNN9LZ86sCbz57n2a+3JVrZRquhSGIHCmrsbTrfiFXNKM5Tzn3Ta3iqmZjdd8Cz+5IKH0AgWY6CWX858iqlmFc0tXV4dO8a/uGeZSLQ2nZprKmk9CWXaCpRkIMJy9416OkmQIA+HzjMicAUMwwXyxVBAc8nX039IOmrPD2ha615hI4XLpnbfYYAE6WmTTSa431NtrUKq1jlvliWRE+kZTfE/2wkyGgEQlkvP6eYs/j7951XyGzOu8Ia3zt0trO2SgC8BXmqx0J0eeekQJBwhpZ9xg+4yt+VS5mVy/KYBMuG9Y/NQ7PRLBnrrSkBbG5b3GF6KiBNYldWR2xjMupAFBn3WGZGVm7E4QK8/Vp8a7K6gWcyJoQSmk9+wftWnLwF56s8pdWYVlhCeVarVa2VqVH1rP75iz3tbzbuvDceyNZN8aPGCKQbtW+T9D3CJzKpyzjxokAJ/lNWOV0Pp9PcRfitkl/ZV52fznWvWEQXU8M3ZnU6EnBEBG6dT3X1b+TPwctFPx2Wp8JIJwy27Ay66PbJ0c4PiZPvWVKnpPitTxRu0ujlnytNGEfePpbXnSN3pLx/l1uIwxO4lUmoBlZbnjC4gQA0XydL8alBc1mvwngIjXRkoThEBJCj51Ox7tfka9zLOMjVTXnJL+waqnNDalq/n9mzqg7TRgMw0VFd5y1w1icUvf9JxDXIVYFAk7ROq11bvvxgxMhlBDHzXryXHkwXvCczy/hJSDIncQ2gncAfZI4xa3Ec2FelhQZgmayyCFHRUC+hXdgwFsr9UlLSmXVKnK/1h2guNeTww0EvaowoXwL/jut/g1fFrqjsqCnKCTPUhp0y0GnLogrSVOgNLoxMsdfIx6/WRMbSqM2rsnqUlmUoUxHCCOrqzBGpk/mbGaO5vnj1njhuB6O8Xw3WJpTm/mp9d1aTXSbtVWuslAvooMgYnDp6jVxZDVyrvTReB36XoS7MW2gzM1FiN/ibZ+t7BDb3Dmh64Y/1nvGo9LgRmvZnqXWZFmuPqiZLUmaMD2rpgJwjbgH6vCw83EB4csKUkyfenT2Rx0o3BSvogK0s7MhfUvAFzLiQYzZkMRuFPu48HCWvQ2E1dLHHF5NPRG6wFncU7bsSArDIg1z6yyaTg7JgIEg6yzpMwKK8exiXCTL/hlgPv55cpG1w29xfs2BgoqfLmwXruC7ANBKn4IfSGLcbqVYay/fk0ziynTwNbzfUzLuhfMNJ8pKWxLqMrIaqSwNiXFtKLeyf8EtzhMYEHMI8T/4Q2rr6OI8GwsoTJxOKycvq57Ikm5BjMkwm/8dHIyLC2tFLfLwzjZE2GfMEFjZa56iVtAkeRZHVj3OnD+I9U6Mo4MZljpE6CfMg5k3jU2BrRVzE4zdqDKsFMi6l4hKdCdWYU0DzLAzSGGFuAQnG2JGBc4X8+ulVfl4uc6uqAipaepAPmsdATJ4Eo4k6Cd+RZgeLkEwAV5/88Y27VrseRMhPS3OizQtiQelaoR0078H6GhibZicsUK2IyA8lpL1agBh5uM84fH6I+RSk7dm7bdEeZ9BExKMAOdx0hN8yp/9X+rurTdRIAwDcFK2rvawPWOi2Xz/abSmlaFymA8MRcJq0RSz3aPb/dnblNgBhI+bJgvP9dz4hkzm8IKF7g1I8IK0QoNuR+4fFrcalCO5lv2/9lTYGonyrMCYYTVxA1Celrim65HJpqvbaReUkK6UejXiNRdzrCFIkY+VTAOotEJW0X7/cJW0aGRce8kHUA+VmtX/Fk7R2ki6tZAmzAGk8Ot8vPZb+BedksOH49d+lnpw0lIUpXXSO3sd3atJV7IHW4+YFeqQ5ZkCCVbMICu/GxCjykp3u6Nu8zy/gIR6UoO5fXvDlGD3mCbmBuSxhelgMRF81WGHHmLG+i3Oz6W/f/9UvYAU9XSvfnX4JwtT/AmHAtyLQ0tgjrOcLjQowh5E0TKMLsDv9Q/U82RqU3v9mkSVnBJtjW18I8IxlOF6FM/Db4Hlv7ACd/39h2eUj14EKPlP5CJeaiuty85l9p8K6tQ4Gsqw/JgBjXNtoHuerjHOgaZPnd2wiOJCE95JkZs/Z+XBe+ILV2AiGBDNv8a8oylPgx0z4vDOtDjAVz85bMm6VUMoXUgZz3z7yypikMM1/YXBgSbHDhjk6fHM/uXMPEg5ataj9QkyDG884JBlRL9N19psLNeMPQ4kI3oMl382m2D2/HdnLBvfRRpIzXm05AUdbTByHdwSvnnHiagms8zYBQMCsdaq7dusJCNeCsyw5zqUGIa5sU5ITH5yg9gUB0AahwLzxGwIOeU3P/aDBqTT5mTVOoNi5MVXEBUNnvhYQNx7QFEbs9bq01nd2FhsWRDArV82eAiUs34zsrrs0lk5WCY0IMdbolRyLE3/vUPtP5FIubaxlIghi0+xnOvRaX1swD5HBcrYQkKggyRvoIkHkaAqdc+qfQwUI0SKGEEaX1WM5kCo+R4x6TpJnEEWjwWSZgZIldev/hCyOCMKzLU+bGC3K3NiQJpnIc0ZQspEIM1kkDaemyMdoBGHNUm7fEubOojigYG0Wxmip/hnrOAsIGW4RBTuoinf7vnQTV3YC3xhRyDpFlZ5Bom5WGXNUsPXye3GHfxr7/yb0kiaOL7wgKLGn2tANDrvaZB9EAb5NbtLrQshIiRI8jx1KatOcne5t3yed6ELeqtnsfLHjsznb9eq/dLT29PT3TPnaEOLod3ix7lqF5xwnIP6Hl9J27DKwLBCHNtup3TwWKMQpzD5IFb9x5zAc5U4bM79vOAGBC8kN3zYYvj0y7tGHzeKPojFqtJVMuCwCiMO89k7DSZ2l2WEyy7Lny9Wuz4P4XwwzyZUMOcSn0vmUOsBTkvMXDV+TLGw4dbBbmUj+dHDPvvBtYxYKGLqqulxFJPSfIuqXPLhv2wldBVCyq+LbAX8GM1nBtTGrpr7qEUuR0kPtWC0US3yrLgZ592/MEAMXDXvRVRc0oV6rVzCXdZIukAY/BDrg6tEfmIMuFtFrAWPOOYJDx7ObAYRD9Cpxg3IISrDrk8daP13we8HUGSa8OnmUyRWXJ/1kbEVndZvkWK5YKH7Cd/r9CLFEl9dFXLIFpjEfAKL9SXZBz1QY8QXDCKch42OC1DpLKBKBA/gEcFnAbfJvogO4vdaeyHG/h9Vw42LjuOnSiFYx7v0Keylky1WPUSvQ7kgHL/ibKH6Y8jK+omFLavFVbk/3CgBONKl8EYM7DZarN3kioV91kTgEsD45w/NVhxbxPbcTbhlQRGpj1oj4BiQznpigrFyGw1ZB+BLwsU6iYyzvEvCBRHF8USjIs5o4F8CPhUXqaTefIUj+HGNMTxrANMLGAJaYKPxQd+lz6FXTXj67xh8k0RNlQupeYxswXsjRmNVtQN4RJxDPLaSyMYRyjrg0Ek4novx7pqMIGhJUivcXfYx6bczZA9RPgtXLzBR7uM6tqFQVQq20UMDtG6dqJ/oMJv0yytGHnLBQNANF97ar9SYChHcLfaq9Ctgi3hz5NcSX14KaQcxhaARI6oPfiifhfL63StKKkDUK4O294+84aBRYhjeijjXPkj+eXQ1hPA9AtGs/v6b81D55XJ5RpYoXT4+dP/4o/vQuCwJNEnqm/Pe+TascxbJ0APDSvqZdO58eZvSuWYEAltPo9WXz08+W93nRkn1EAA9/p1POvQP7LM5/L3EGxgaEUzacrnXcBawFaj3/tbqXiT6kBUPcmC8MbhpcBafmtOObM28b7L4BN3xAD6t8/FGSXXxAKelomvjAdkKWHxEkzMgeXsdPDJ/dcSQ2C/7I/ZC8kWd+1CU+z+qnSA+0ImvQenfqlz2XRI/YKsC4yKTS/qcrU5poJ6B8bJBrwkncxQhRnk2a1TR+6JUhHq6CkaUhs737406Q9hnVtJJIR8vrnzpurJzg0JMOiWIB95hRDAbe88bTLwXz6e1aWIFPoXz7EKZswgow6JNq+b0fzzbHrIldnXo3YEPIhoH5XVhuaA8FM2AK9o2ezUG6HA/OUyCAiqSjJlgRgZNGJB9izjNWCjqNqUAlyi3YboK6qOg8K7YInw55zoVDIDzwmSTscn+G6/CGYCKFOK21/Fb0BjqBDT6FsJpK3AlVYepf8YTyyG0gkQjys1o5eLvZcSXTbxQrGitcI0yjB7V6ybpiYvxFnzx99hi0WGsdPQyLMgv03YTXiPbUyHLyrPaCUMTOHXgQLXI+gFD5S80napyouJ3DRqcyBF2bKbsby6NXQRZFFjyie8ljFjWhgtVw478ItgzMIqbZgbOvavs1Dy1dGJfWZPlXaNGQYp2FclPxPgXlk5kiIGuaC8nuq4KeTc3xHqfGCgMxSAakS2AEnS5P56eTxcXiVt3Cezf7YylE6k3KIRHtANFKACEQ7SsqXWdT+s58w/WIWYiyEIkwGsI1K9KrcJdSy82bRR0Uh5Z3BNqdSoC1eeQm519Sy/SeRQWYR4ETk5h2leCqT1gr4YyWfqwTU8owPWm1ehh1HIaxJkM4ZVRJkvPddhsxepr4uWejCgK5LEShVOu3yxJILdDz4GCZhKAD6dt6c6R7a8j0AAay4i9Jtz5oRfHtnrC2A1HFVqfnGnv/0/0vjqjGmhJdw53rtCZvY6mRc+u+9BkGPEvDFC4LK8i9DQs4OyIVAt6EeNTDwmtdPVYMLqAHqHZLv0EscKGQFOg9KP4lgFi5BMjL0jopml/KDQa9EffbgjUJ8guHMFWAu+iO4tn3Ef7lq6kDmy2YFyfO4uGRbssdUOd11qMLey9lKUtuRN7MZAa3fYl0VCi5rIHz/e7yyPmd9OWxqRPcTnVbNrzP/g3t8MmewG1crc3/uD3prMhXI4M12jrB33xveC8WWtywTCiFlw9OpM/n5g4j8OgFvlHz49zhoCbrPRVy2bxaF46n/2OnHdYSK/jT++rnMXD3s1a2pPdjqVWqXLTkS5CdgaNWiyttkErjckdFJgKXvZBKXU7IqZwkLNeBamzN6prGu48lyB0OCOx32ymrNdC9oIyLnW5svcoGMHhRdZ6RaQyp4Rc6nLlfp1YgduZlPW6SG2cHNosmrKMOUQZYx+ebGCp9CdV3NqN1qsRUyys1PlWkZBKd72O9w5/1jIsnBwXc9brZjOPHfyDVFXfCqzVccp6/fznHIcOXUlq9R6HDm83rbUgfWIjtWbhSmGWvVu01oTUfh63svakG4mMuBms8C5nrQ/F0yN8r+NYugjpN5rYrDLWGkBvgUqNweJeWoaDcg1vbcCzrw3prbdILl6t/Oq3PfmE1+59fAwElmorba0j6f0dmyF4Pag+EdQ5Q9g7+2lrXcltoNQgxc5mzlpncnux1bJPs9aak9o6ZLE4ushZhsy5zdS8PUsZqZ7IvVMaV2Eva3T6l+JegVyBpxmjkQUUL/JEJtSswCXSZ6eHNlbqfMsswEjSGwfn+cIRe8Yu5Hf2zrLGqAhyxczG5t9kimkjlMFgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDC8nL8AR30VOi53BL4AAAAASUVORK5CYII=',

            // your Scratch blocks
            blocks: [
                {
                    // name of the function where your block code lives
                    opcode: 'chatBlock',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.COMMAND,

                    // label to display on the block
                    text: 'minecraft chat [MY_STRING]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        MY_STRING: {
                            // default value before the user sets something
                            defaultValue: 'hello from scratch!',

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    // name of the function where your block code lives
                    opcode: 'getBlock',

                    // type of block - choose from:
                    //   BlockType.REPORTER - returns a value, like "direction"
                    //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
                    blockType: BlockType.REPORTER,

                    // label to display on the block
                    text: 'getBlock at [X] [Y] [Z]',

                    // true if this block should end a stack
                    terminal: false,

                    // where this block should be available for code - choose from:
                    //   TargetType.SPRITE - for code in sprites
                    //   TargetType.STAGE  - for code on the stage / backdrop
                    // remove one of these if this block doesn't apply to both
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    // arguments used in the block
                    arguments: {
                        X: {
                            // default value before the user sets something
                            defaultValue: 0,

                            // type/shape of the parameter - choose from:
                            //     ArgumentType.ANGLE - numeric value with an angle picker
                            //     ArgumentType.BOOLEAN - true/false value
                            //     ArgumentType.COLOR - numeric value with a colour picker
                            //     ArgumentType.NUMBER - numeric value
                            //     ArgumentType.STRING - text value
                            //     ArgumentType.NOTE - midi music value with a piano picker
                            type: ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,
                            type: ArgumentType.NUMBER
                        },
                        Z: {
                            defaultValue: 0,
                            type: ArgumentType.NUMBER
                        }
                    }
                }
            ]
        };
    }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */

    chatBlock ({ MY_STRING }) {
  return fetch('http://localhost:5000/chat?msg=' + MY_STRING)
    .then((response) => {
        const data = response.json();
        return data;
         })
    .then((data) => {
        console.log(data);
        if (data.hasOwnProperty("msg")) 
            return data["msg"];})
    .catch((e) => {console.log("ERROR :"+e); 
                    return false;});
    }

     getBlock ({ X, Y, Z }) {
  return fetch('http://localhost:5000/getBlock?x=' + X+"&y="+Y+"&z="+Z)
    .then((response) => {
        const data = response.json();
        return data;
         })
    .then((data) => {
        console.log(data);
        if (data.hasOwnProperty("id")) 
            return data["id"];})
    .catch((e) => {console.log("ERROR :"+e); 
                    return false;});
    }

}
module.exports = Scratch3YourExtension;
