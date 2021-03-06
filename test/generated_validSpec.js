'use strict'

const assert = require('chai').assert
const cc = require('../src')

describe('valid', function () {
  describe('0000_test-minimal-preimage.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"preimage-sha-256","preimage":""}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A0258020E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855810100')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"preimage-sha-256","preimage":""}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A0028000')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"preimage-sha-256","preimage":""}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A0258020E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855810100', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A0028000', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A0028000')
    })
  })
  describe('0001_test-minimal-prefix.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"","subfulfillment":{"type":"preimage-sha-256","preimage":""}}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '302E8000810100A227A0258020E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855810100')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A12A8020BB1AC5260C0141B7E54B26EC2330637C5597BF811951AC09E744AD20FF77E2878102040082020780')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"","subfulfillment":{"type":"preimage-sha-256","preimage":""}}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A10B8000810100A204A0028000')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"","subfulfillment":{"type":"preimage-sha-256","preimage":""}}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A12A8020BB1AC5260C0141B7E54B26EC2330637C5597BF811951AC09E744AD20FF77E2878102040082020780', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;uxrFJgwBQbflSybsIzBjfFWXv4EZUawJ50StIP934oc?fpt=prefix-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A10B8000810100A204A0028000', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A10B8000810100A204A0028000')
    })
  })
  describe('0002_test-minimal-threshold.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"preimage-sha-256","preimage":""}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '302C800101A127A0258020E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855810100')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22A8020B4B84136DF48A71D73F4985C04C6767A778ECB65BA7023B4506823BEEE7631B98102040082020780')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"preimage-sha-256","preimage":""}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A208A004A0028000A100')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"preimage-sha-256","preimage":""}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22A8020B4B84136DF48A71D73F4985C04C6767A778ECB65BA7023B4506823BEEE7631B98102040082020780', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tLhBNt9Ipx1z9JhcBMZ2eneOy2W6cCO0UGgjvu52Mbk?fpt=threshold-sha-256&cost=1024&subtypes=preimage-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A208A004A0028000A100', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A208A004A0028000A100')
    })
  })
  describe('0003_test-minimal-rsa.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"rsa-sha-256","modulus":"4e-LJNb3awnIHtd1KqJi8ETwSodNQ4CdMc6mEvmbDJeotDdBU-Pu89ZmFoQ-DkHCkyZLcbYXPbHPDWzVWMWGV3Bvzwl_cExIPlnL_f1bPue8gNdAxeDwR_PoX8DXWBV3am8_I8XcXnlxOaaILjgzakpfs2E3Yg_zZj264yhHKAGGL3Ly-HsgK5yJrdfNWwoHb3xT41A59n7RfsgV5bQwXMYxlwaNXm5Xm6beX04-V99eTgcv8s5MZutFIzlzh1J1ljnwJXv1fb1cRD-1FYzOCj02rce6AfM6C7bbsr-YnWBxEvI0TZk-d-VjwdNh3t9X2pbvLPxoXwArY4JGpbMJuQ","signature":"vULWVp9lma7UVflrwO0I7RSAvzbNnhRn-cb3RGHJ46dJM0svZASqX59rr-dsNH0GklCzXRyXDHkwWe5zOoGT8w-nj-x8rkWePd_XYzgF1HaUDQy1PX-zidza6vboz0jEtWNUMOTyvN_lBcLA_Be0DZPH7bfCYev0OJWnBeAkqgVJpmD3CjIVBkdSLb5rY1IEl8_4-NXXR2iifFuG5YC-P83Jbxl2KTy6DVjfxgtRi2MqbcHpUMQ-Ix_ho3mqbdzFLHDt-FHGwBI6lkJhz9s4V81s1a3DfY2izJJO2uHYTPYSRYfydMH6NpfaKQHwJp8DskPAO2FOA4Xhlh-sUAD5uw"}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3082010480820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B9')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A3278020B31FA8206E4EA7E515337B3B33082B877651801085ED84FB4DAEB247BF698D7F8103010000')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"rsa-sha-256","modulus":"4e-LJNb3awnIHtd1KqJi8ETwSodNQ4CdMc6mEvmbDJeotDdBU-Pu89ZmFoQ-DkHCkyZLcbYXPbHPDWzVWMWGV3Bvzwl_cExIPlnL_f1bPue8gNdAxeDwR_PoX8DXWBV3am8_I8XcXnlxOaaILjgzakpfs2E3Yg_zZj264yhHKAGGL3Ly-HsgK5yJrdfNWwoHb3xT41A59n7RfsgV5bQwXMYxlwaNXm5Xm6beX04-V99eTgcv8s5MZutFIzlzh1J1ljnwJXv1fb1cRD-1FYzOCj02rce6AfM6C7bbsr-YnWBxEvI0TZk-d-VjwdNh3t9X2pbvLPxoXwArY4JGpbMJuQ","signature":"vULWVp9lma7UVflrwO0I7RSAvzbNnhRn-cb3RGHJ46dJM0svZASqX59rr-dsNH0GklCzXRyXDHkwWe5zOoGT8w-nj-x8rkWePd_XYzgF1HaUDQy1PX-zidza6vboz0jEtWNUMOTyvN_lBcLA_Be0DZPH7bfCYev0OJWnBeAkqgVJpmD3CjIVBkdSLb5rY1IEl8_4-NXXR2iifFuG5YC-P83Jbxl2KTy6DVjfxgtRi2MqbcHpUMQ-Ix_ho3mqbdzFLHDt-FHGwBI6lkJhz9s4V81s1a3DfY2izJJO2uHYTPYSRYfydMH6NpfaKQHwJp8DskPAO2FOA4Xhlh-sUAD5uw"}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A382020880820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B981820100BD42D6569F6599AED455F96BC0ED08ED1480BF36CD9E1467F9C6F74461C9E3A749334B2F6404AA5F9F6BAFE76C347D069250B35D1C970C793059EE733A8193F30FA78FEC7CAE459E3DDFD7633805D476940D0CB53D7FB389DCDAEAF6E8CF48C4B5635430E4F2BCDFE505C2C0FC17B40D93C7EDB7C261EBF43895A705E024AA0549A660F70A32150647522DBE6B63520497CFF8F8D5D74768A27C5B86E580BE3FCDC96F1976293CBA0D58DFC60B518B632A6DC1E950C43E231FE1A379AA6DDCC52C70EDF851C6C0123A964261CFDB3857CD6CD5ADC37D8DA2CC924EDAE1D84CF6124587F274C1FA3697DA2901F0269F03B243C03B614E0385E1961FAC5000F9BB')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"rsa-sha-256","modulus":"4e-LJNb3awnIHtd1KqJi8ETwSodNQ4CdMc6mEvmbDJeotDdBU-Pu89ZmFoQ-DkHCkyZLcbYXPbHPDWzVWMWGV3Bvzwl_cExIPlnL_f1bPue8gNdAxeDwR_PoX8DXWBV3am8_I8XcXnlxOaaILjgzakpfs2E3Yg_zZj264yhHKAGGL3Ly-HsgK5yJrdfNWwoHb3xT41A59n7RfsgV5bQwXMYxlwaNXm5Xm6beX04-V99eTgcv8s5MZutFIzlzh1J1ljnwJXv1fb1cRD-1FYzOCj02rce6AfM6C7bbsr-YnWBxEvI0TZk-d-VjwdNh3t9X2pbvLPxoXwArY4JGpbMJuQ","signature":"vULWVp9lma7UVflrwO0I7RSAvzbNnhRn-cb3RGHJ46dJM0svZASqX59rr-dsNH0GklCzXRyXDHkwWe5zOoGT8w-nj-x8rkWePd_XYzgF1HaUDQy1PX-zidza6vboz0jEtWNUMOTyvN_lBcLA_Be0DZPH7bfCYev0OJWnBeAkqgVJpmD3CjIVBkdSLb5rY1IEl8_4-NXXR2iifFuG5YC-P83Jbxl2KTy6DVjfxgtRi2MqbcHpUMQ-Ix_ho3mqbdzFLHDt-FHGwBI6lkJhz9s4V81s1a3DfY2izJJO2uHYTPYSRYfydMH6NpfaKQHwJp8DskPAO2FOA4Xhlh-sUAD5uw"}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A3278020B31FA8206E4EA7E515337B3B33082B877651801085ED84FB4DAEB247BF698D7F8103010000', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A382020880820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B981820100BD42D6569F6599AED455F96BC0ED08ED1480BF36CD9E1467F9C6F74461C9E3A749334B2F6404AA5F9F6BAFE76C347D069250B35D1C970C793059EE733A8193F30FA78FEC7CAE459E3DDFD7633805D476940D0CB53D7FB389DCDAEAF6E8CF48C4B5635430E4F2BCDFE505C2C0FC17B40D93C7EDB7C261EBF43895A705E024AA0549A660F70A32150647522DBE6B63520497CFF8F8D5D74768A27C5B86E580BE3FCDC96F1976293CBA0D58DFC60B518B632A6DC1E950C43E231FE1A379AA6DDCC52C70EDF851C6C0123A964261CFDB3857CD6CD5ADC37D8DA2CC924EDAE1D84CF6124587F274C1FA3697DA2901F0269F03B243C03B614E0385E1961FAC5000F9BB', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A382020880820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B981820100BD42D6569F6599AED455F96BC0ED08ED1480BF36CD9E1467F9C6F74461C9E3A749334B2F6404AA5F9F6BAFE76C347D069250B35D1C970C793059EE733A8193F30FA78FEC7CAE459E3DDFD7633805D476940D0CB53D7FB389DCDAEAF6E8CF48C4B5635430E4F2BCDFE505C2C0FC17B40D93C7EDB7C261EBF43895A705E024AA0549A660F70A32150647522DBE6B63520497CFF8F8D5D74768A27C5B86E580BE3FCDC96F1976293CBA0D58DFC60B518B632A6DC1E950C43E231FE1A379AA6DDCC52C70EDF851C6C0123A964261CFDB3857CD6CD5ADC37D8DA2CC924EDAE1D84CF6124587F274C1FA3697DA2901F0269F03B243C03B614E0385E1961FAC5000F9BB')
    })
  })
  describe('0004_test-minimal-ed25519.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '30228020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100B')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100B', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100B')
    })
  })
  describe('0005_test-basic-preimage.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"preimage-sha-256","preimage":"YWFh"}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '616161')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"preimage-sha-256","preimage":"YWFh"}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A0058003616161')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"preimage-sha-256","preimage":"YWFh"}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mDSHbc-wXLFnpcJJU-uljErImxrfV_KPL50JrxB-6PA?fpt=preimage-sha-256&cost=3')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A0058003616161', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A0058003616161')
    })
  })
  describe('0006_test-basic-prefix.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '30338003616161810100A229A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;RR_hXxYpnUlZk_5pLbmJ5WpSMKkEdvdzkqPNMhPAcz8?fpt=prefix-sha-256&cost=132099&subtypes=ed25519-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509')
    })
  })
  describe('0007_test-basic-prefix-two-levels-deep.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"prefix-sha-256","maxMessageLength":3,"prefix":"YmJi","subfulfillment":{"type":"prefix-sha-256","maxMessageLength":6,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"pCNg9H99uG218DfIECQiNyB9et1uPlMX4hKyB-Jb7SrLSFrQvLtXdVcmDsu71ncY1sq630W61lXRuM6EYJ6XAQ"}}}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '30378003626262810103A22DA12B80207F19C9BB3BC767DE39657E11D16068F8CAB00E3E3C23916DF967B584A28B26DC810302040982020308')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A12B8020177350AD8566C528B92D9B5382DF2C68D9BA9F9FA41D43DBDD8E40B118DD9641810302080F82020308')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"prefix-sha-256","maxMessageLength":3,"prefix":"YmJi","subfulfillment":{"type":"prefix-sha-256","maxMessageLength":6,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"pCNg9H99uG218DfIECQiNyB9et1uPlMX4hKyB-Jb7SrLSFrQvLtXdVcmDsu71ncY1sq630W61lXRuM6EYJ6XAQ"}}}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A17C8003626262810103A272A1708003616161810106A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140A42360F47F7DB86DB5F037C810242237207D7ADD6E3E5317E212B207E25BED2ACB485AD0BCBB577557260ECBBBD67718D6CABADF45BAD655D1B8CE84609E9701')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"prefix-sha-256","maxMessageLength":3,"prefix":"YmJi","subfulfillment":{"type":"prefix-sha-256","maxMessageLength":6,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"pCNg9H99uG218DfIECQiNyB9et1uPlMX4hKyB-Jb7SrLSFrQvLtXdVcmDsu71ncY1sq630W61lXRuM6EYJ6XAQ"}}}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A12B8020177350AD8566C528B92D9B5382DF2C68D9BA9F9FA41D43DBDD8E40B118DD9641810302080F82020308', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;F3NQrYVmxSi5LZtTgt8saNm6n5-kHUPb3Y5AsRjdlkE?fpt=prefix-sha-256&cost=133135&subtypes=ed25519-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A17C8003626262810103A272A1708003616161810106A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140A42360F47F7DB86DB5F037C810242237207D7ADD6E3E5317E212B207E25BED2ACB485AD0BCBB577557260ECBBBD67718D6CABADF45BAD655D1B8CE84609E9701', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A17C8003626262810103A272A1708003616161810106A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140A42360F47F7DB86DB5F037C810242237207D7ADD6E3E5317E212B207E25BED2ACB485AD0BCBB577557260ECBBBD67718D6CABADF45BAD655D1B8CE84609E9701')
    })
  })
  describe('0008_test-basic-threshold.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"QSAOQpYe6kYMgnbyOatmt2-PKGnqzMX56ZRcCrxjsUMGVvPaLSF6QzJ-6M4RJ9FKhddK9BL-k3A0W6a0QAPXca7dK6D8JQYn_fYWMa_WTpvucUsbr7afkBvutvlZsWpUsyippnTIg8r8T8L3sEdtvKqNm_1H9zTjRza_ZulzsxXCq_RyewYso8QCk261CEnhgV3RYEpgTe-maM_oI7AIv4979XzrG0HlGP9TrpEe-YgFcbPRdCNB1g48sr65PrXxePjve6DG8ikLmVXYPWD5Q9ZEVx7I1fBk2V8doedZ1pINhKVMvEl4NkCnsM89Ao5ifsetJakV9tjCSy4JkVKKAsW-8BBsGLPznFmZVut6J7M3MT3Pk-dYZ2BqSsWhq2-btETcHa0fVG-u3mrpNIhASQF2kTcdUe4dZQ785YGzDGhDCH5wFBkPRGAmfYlNUlgU3aNDuaBIncCMajQzR0LOowtJJRLSlXRSF91l7P7LnKGNIS-EpQbXACbtMyiWvSSmMFoMve6d_Yq7hQf4QOuUz6jpKOaRDCdfe2jRH5ZGPBAqWWYTR4aVvHZx-ycwkTnGzS8Vyn4kBS5H9ONO-LhE7DZKhb3JvoQlz_cqd76Y2QFphqZnEJgl8e8Y4IFwqHtDaOfBQsGdrRBgXE80HVIJmHrzGrqOLklj8-B5TdEfC3I"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"NEydEqAqV7Nf2WYZPO6V1du7xndVP86_QUwY2nUAKd05xuU63Yks7-RCNYMf-OXzaGiO93zPb5l_1BGmp-v5Ag"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '308184800102A17FA12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22B8020B6ACF4083E438BE4356F25FF92C295E9C8E1BAB141B4607BA48511EBA35AEFCC810306100382020358')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"QSAOQpYe6kYMgnbyOatmt2-PKGnqzMX56ZRcCrxjsUMGVvPaLSF6QzJ-6M4RJ9FKhddK9BL-k3A0W6a0QAPXca7dK6D8JQYn_fYWMa_WTpvucUsbr7afkBvutvlZsWpUsyippnTIg8r8T8L3sEdtvKqNm_1H9zTjRza_ZulzsxXCq_RyewYso8QCk261CEnhgV3RYEpgTe-maM_oI7AIv4979XzrG0HlGP9TrpEe-YgFcbPRdCNB1g48sr65PrXxePjve6DG8ikLmVXYPWD5Q9ZEVx7I1fBk2V8doedZ1pINhKVMvEl4NkCnsM89Ao5ifsetJakV9tjCSy4JkVKKAsW-8BBsGLPznFmZVut6J7M3MT3Pk-dYZ2BqSsWhq2-btETcHa0fVG-u3mrpNIhASQF2kTcdUe4dZQ785YGzDGhDCH5wFBkPRGAmfYlNUlgU3aNDuaBIncCMajQzR0LOowtJJRLSlXRSF91l7P7LnKGNIS-EpQbXACbtMyiWvSSmMFoMve6d_Yq7hQf4QOuUz6jpKOaRDCdfe2jRH5ZGPBAqWWYTR4aVvHZx-ycwkTnGzS8Vyn4kBS5H9ONO-LhE7DZKhb3JvoQlz_cqd76Y2QFphqZnEJgl8e8Y4IFwqHtDaOfBQsGdrRBgXE80HVIJmHrzGrqOLklj8-B5TdEfC3I"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"NEydEqAqV7Nf2WYZPO6V1du7xndVP86_QUwY2nUAKd05xuU63Yks7-RCNYMf-OXzaGiO93zPb5l_1BGmp-v5Ag"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A2820106A081D8A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140344C9D12A02A57B35FD966193CEE95D5DBBBC677553FCEBF414C18DA750029DD39C6E53ADD892CEFE44235831FF8E5F368688EF77CCF6F997FD411A6A7EBF902A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A129A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"QSAOQpYe6kYMgnbyOatmt2-PKGnqzMX56ZRcCrxjsUMGVvPaLSF6QzJ-6M4RJ9FKhddK9BL-k3A0W6a0QAPXca7dK6D8JQYn_fYWMa_WTpvucUsbr7afkBvutvlZsWpUsyippnTIg8r8T8L3sEdtvKqNm_1H9zTjRza_ZulzsxXCq_RyewYso8QCk261CEnhgV3RYEpgTe-maM_oI7AIv4979XzrG0HlGP9TrpEe-YgFcbPRdCNB1g48sr65PrXxePjve6DG8ikLmVXYPWD5Q9ZEVx7I1fBk2V8doedZ1pINhKVMvEl4NkCnsM89Ao5ifsetJakV9tjCSy4JkVKKAsW-8BBsGLPznFmZVut6J7M3MT3Pk-dYZ2BqSsWhq2-btETcHa0fVG-u3mrpNIhASQF2kTcdUe4dZQ785YGzDGhDCH5wFBkPRGAmfYlNUlgU3aNDuaBIncCMajQzR0LOowtJJRLSlXRSF91l7P7LnKGNIS-EpQbXACbtMyiWvSSmMFoMve6d_Yq7hQf4QOuUz6jpKOaRDCdfe2jRH5ZGPBAqWWYTR4aVvHZx-ycwkTnGzS8Vyn4kBS5H9ONO-LhE7DZKhb3JvoQlz_cqd76Y2QFphqZnEJgl8e8Y4IFwqHtDaOfBQsGdrRBgXE80HVIJmHrzGrqOLklj8-B5TdEfC3I"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"NEydEqAqV7Nf2WYZPO6V1du7xndVP86_QUwY2nUAKd05xuU63Yks7-RCNYMf-OXzaGiO93zPb5l_1BGmp-v5Ag"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22B8020B6ACF4083E438BE4356F25FF92C295E9C8E1BAB141B4607BA48511EBA35AEFCC810306100382020358', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;tqz0CD5Di-Q1byX_ksKV6cjhurFBtGB7pIUR66Na78w?fpt=threshold-sha-256&cost=397315&subtypes=ed25519-sha-256,prefix-sha-256,rsa-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A2820106A081D8A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140344C9D12A02A57B35FD966193CEE95D5DBBBC677553FCEBF414C18DA750029DD39C6E53ADD892CEFE44235831FF8E5F368688EF77CCF6F997FD411A6A7EBF902A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A129A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A2820106A081D8A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140344C9D12A02A57B35FD966193CEE95D5DBBBC677553FCEBF414C18DA750029DD39C6E53ADD892CEFE44235831FF8E5F368688EF77CCF6F997FD411A6A7EBF902A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A129A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000')
    })
  })
  describe('0009_test-basic-threshold-same-condition-twice.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"preimage-sha-256","preimage":"YWFh"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3081D9800101A181D3A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22B80209A0B2C63DF80686E6020D0CA21CBFE668CCEC3D1AF82713FEAE9B8DD4A0F9BB78103041400820203D8')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"preimage-sha-256","preimage":"YWFh"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A281B8A007A0058003616161A181ACA12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"preimage-sha-256","preimage":"YWFh"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22B80209A0B2C63DF80686E6020D0CA21CBFE668CCEC3D1AF82713FEAE9B8DD4A0F9BB78103041400820203D8', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;mgssY9-AaG5gINDKIcv-ZozOw9GvgnE_6um43UoPm7c?fpt=threshold-sha-256&cost=267264&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A281B8A007A0058003616161A181ACA12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A281B8A007A0058003616161A181ACA12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000')
    })
  })
  describe('0010_test-basic-threshold-same-fulfillment-twice.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":4,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3081B2800104A181ACA12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A12B8020451FE15F16299D495993FE692DB989E56A5230A90476F77392A3CD3213C0733F810302040382020308A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22B80208E433EF5D3EAA00A2B34A05CA7C22DD392973A19F1A243268CB53111BDF1C844810308180682020348')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":4,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A28201B6A08201B0A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA100')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":4,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22B80208E433EF5D3EAA00A2B34A05CA7C22DD392973A19F1A243268CB53111BDF1C844810308180682020348', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;jkM-9dPqoAorNKBcp8It05KXOhnxokMmjLUxEb3xyEQ?fpt=threshold-sha-256&cost=530438&subtypes=ed25519-sha-256,prefix-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A28201B6A08201B0A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA100', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A28201B6A08201B0A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA100')
    })
  })
  describe('0011_test-basic-threshold-two-levels-deep.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}]},{"type":"preimage-sha-256","preimage":"YWFh"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3059800102A154A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103A22B8020B6ACF4083E438BE4356F25FF92C295E9C8E1BAB141B4607BA48511EBA35AEFCC810306100382020358')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22B80200C99630A201A99B0748D2BADB205E5CA939692C687D1C4A697E39BA8BA1EBE718103061806820203D8')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}]},{"type":"preimage-sha-256","preimage":"YWFh"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A2820117A0820111A0058003616161A2820106A081D8A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA129A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A100')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"fss4we3Ml_SM2IUwwkbFSRKGf1EbxN3QjFc8ogg6yf2qNFwXdo2t6YNCSBjbUqNy4oD7pWgvZSFalz-3KGdJO2T4-zQVM5felzo2xzxSuR4DQBtvpWP3d4T6r4ggQFvukx6jX3qNlCUUrlhsH8yo7e-biQTRuOEcnNjdu38VG3cX4STnLVejyjP0TkrXvDvYf9wge6rqrbax8XVPx48bQmbd84bl1STBo4cGUjqoIPEYsFN3Law-SoZ700WkvDWSCe9sHIPPVDKcJUjRrwUd_tr1PoBA9_OwYThrJ7UMj98w-k_X1fPfTbB0RMW4Z9V_P9L5r0AXRyHlYEJILwy4oEx4b74N47mHskntvTC32yuSic9E0OfLLmvewIpukErdNo5AwKf5LoSGWAaLDdbF7989xvK3YBB8AfWqr6jjf3ZmKIb8XS2yXduOP9T6ixFPj-pjn0VfAugCY_a85IO6LiChBeliMO84t5OO-qUKmdnj1qMd5Piy_H28FnXN_57X6tSUmOfo1oNTvMKBCWBg5azgw5dZNCYu18OxfmpxsXPgWF8Th7omsxSFqCCOOBoFPoFdVu3Lj_2pa9pLgJF5FzWZKKNEBnwBjPf6MD_PkybcjX9atigIbUvTgEbwKVNZrgENagDTgT984cfm7baOB4eYWTuaV6ycCgpMLSgk-gA"},{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"YWFh","subfulfillment":{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}},{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"5VZDAMNgrHKQhuLMgG6CioSHfx645dl02HPgZSJJAVVfuIIVkKM7rMYeOXAc-bRr0lv18FlbviRlUUFDjnoQCw"}]},{"type":"preimage-sha-256","preimage":"YWFh"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22B80200C99630A201A99B0748D2BADB205E5CA939692C687D1C4A697E39BA8BA1EBE718103061806820203D8', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;DJljCiAambB0jSutsgXlypOWksaH0cSml-ObqLoevnE?fpt=threshold-sha-256&cost=399366&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256,rsa-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A2820117A0820111A0058003616161A2820106A081D8A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA129A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A100', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A2820117A0820111A0058003616161A2820106A081D8A1708003616161810100A266A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140E5564300C360AC729086E2CC806E828A84877F1EB8E5D974D873E065224901555FB8821590A33BACC61E39701CF9B46BD25BF5F0595BBE24655141438E7A100BA129A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000A100')
    })
  })
  describe('0012_test-basic-threshold-schroedinger.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"preimage-sha-256","preimage":"YWFh"},{"type":"preimage-sha-256","preimage":"YWFh"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3053800101A14EA02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22A8020E4FDB4652C6F17A38B2ABE9AA00640B1E184FE7A8D0C971B5D24F7EDA6FC68BF8102080382020780')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"preimage-sha-256","preimage":"YWFh"},{"type":"preimage-sha-256","preimage":"YWFh"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A232A007A0058003616161A127A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":1,"subfulfillments":[{"type":"preimage-sha-256","preimage":"YWFh"},{"type":"preimage-sha-256","preimage":"YWFh"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22A8020E4FDB4652C6F17A38B2ABE9AA00640B1E184FE7A8D0C971B5D24F7EDA6FC68BF8102080382020780', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;5P20ZSxvF6OLKr6aoAZAseGE_nqNDJcbXST37ab8aL8?fpt=threshold-sha-256&cost=2051&subtypes=preimage-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A232A007A0058003616161A127A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A232A007A0058003616161A127A02580209834876DCFB05CB167A5C24953EBA58C4AC89B1ADF57F28F2F9D09AF107EE8F0810103')
    })
  })
  describe('0013_test-basic-rsa.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"rsa-sha-256","modulus":"4e-LJNb3awnIHtd1KqJi8ETwSodNQ4CdMc6mEvmbDJeotDdBU-Pu89ZmFoQ-DkHCkyZLcbYXPbHPDWzVWMWGV3Bvzwl_cExIPlnL_f1bPue8gNdAxeDwR_PoX8DXWBV3am8_I8XcXnlxOaaILjgzakpfs2E3Yg_zZj264yhHKAGGL3Ly-HsgK5yJrdfNWwoHb3xT41A59n7RfsgV5bQwXMYxlwaNXm5Xm6beX04-V99eTgcv8s5MZutFIzlzh1J1ljnwJXv1fb1cRD-1FYzOCj02rce6AfM6C7bbsr-YnWBxEvI0TZk-d-VjwdNh3t9X2pbvLPxoXwArY4JGpbMJuQ","signature":"SOiUXv4AdVbVv01fJJ5ICPcwfilRHTJi2u9h2ICY-apKi8BiOoyXVzj2XWv0WdVD8onXPLx69Oo6M_vz7ERARHkR1yKUCR5WGDNijkmncu1gjebERZWpHj4X1s9ew7JSjWPSrdZGOYmxLuxXffZHCWDfaDKp2Ew2DRwhetZMhiW9tZT7CtoIbN7LveWA1CS_l0bS8MMSgm27sArWi1LEy31HFWujXjqYHJc4Y3ksyA0EoYAhClJBWGW2Szphd0sdOXXXipiwgh7lXKD4YwXUJSnhDrAVzv1AL7WbKruN7uUqbyRH0ihGA9IZzU6M-c_91UmIicN4C1ndalfvfXMmIA"}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3082010480820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B9')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A3278020B31FA8206E4EA7E515337B3B33082B877651801085ED84FB4DAEB247BF698D7F8103010000')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"rsa-sha-256","modulus":"4e-LJNb3awnIHtd1KqJi8ETwSodNQ4CdMc6mEvmbDJeotDdBU-Pu89ZmFoQ-DkHCkyZLcbYXPbHPDWzVWMWGV3Bvzwl_cExIPlnL_f1bPue8gNdAxeDwR_PoX8DXWBV3am8_I8XcXnlxOaaILjgzakpfs2E3Yg_zZj264yhHKAGGL3Ly-HsgK5yJrdfNWwoHb3xT41A59n7RfsgV5bQwXMYxlwaNXm5Xm6beX04-V99eTgcv8s5MZutFIzlzh1J1ljnwJXv1fb1cRD-1FYzOCj02rce6AfM6C7bbsr-YnWBxEvI0TZk-d-VjwdNh3t9X2pbvLPxoXwArY4JGpbMJuQ","signature":"SOiUXv4AdVbVv01fJJ5ICPcwfilRHTJi2u9h2ICY-apKi8BiOoyXVzj2XWv0WdVD8onXPLx69Oo6M_vz7ERARHkR1yKUCR5WGDNijkmncu1gjebERZWpHj4X1s9ew7JSjWPSrdZGOYmxLuxXffZHCWDfaDKp2Ew2DRwhetZMhiW9tZT7CtoIbN7LveWA1CS_l0bS8MMSgm27sArWi1LEy31HFWujXjqYHJc4Y3ksyA0EoYAhClJBWGW2Szphd0sdOXXXipiwgh7lXKD4YwXUJSnhDrAVzv1AL7WbKruN7uUqbyRH0ihGA9IZzU6M-c_91UmIicN4C1ndalfvfXMmIA"}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A382020880820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B98182010048E8945EFE007556D5BF4D5F249E4808F7307E29511D3262DAEF61D88098F9AA4A8BC0623A8C975738F65D6BF459D543F289D73CBC7AF4EA3A33FBF3EC4440447911D72294091E561833628E49A772ED608DE6C44595A91E3E17D6CF5EC3B2528D63D2ADD6463989B12EEC577DF6470960DF6832A9D84C360D1C217AD64C8625BDB594FB0ADA086CDECBBDE580D424BF9746D2F0C312826DBBB00AD68B52C4CB7D47156BA35E3A981C973863792CC80D04A180210A52415865B64B3A61774B1D3975D78A98B0821EE55CA0F86305D42529E10EB015CEFD402FB59B2ABB8DEEE52A6F2447D2284603D219CD4E8CF9CFFDD5498889C3780B59DD6A57EF7D732620')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"rsa-sha-256","modulus":"4e-LJNb3awnIHtd1KqJi8ETwSodNQ4CdMc6mEvmbDJeotDdBU-Pu89ZmFoQ-DkHCkyZLcbYXPbHPDWzVWMWGV3Bvzwl_cExIPlnL_f1bPue8gNdAxeDwR_PoX8DXWBV3am8_I8XcXnlxOaaILjgzakpfs2E3Yg_zZj264yhHKAGGL3Ly-HsgK5yJrdfNWwoHb3xT41A59n7RfsgV5bQwXMYxlwaNXm5Xm6beX04-V99eTgcv8s5MZutFIzlzh1J1ljnwJXv1fb1cRD-1FYzOCj02rce6AfM6C7bbsr-YnWBxEvI0TZk-d-VjwdNh3t9X2pbvLPxoXwArY4JGpbMJuQ","signature":"SOiUXv4AdVbVv01fJJ5ICPcwfilRHTJi2u9h2ICY-apKi8BiOoyXVzj2XWv0WdVD8onXPLx69Oo6M_vz7ERARHkR1yKUCR5WGDNijkmncu1gjebERZWpHj4X1s9ew7JSjWPSrdZGOYmxLuxXffZHCWDfaDKp2Ew2DRwhetZMhiW9tZT7CtoIbN7LveWA1CS_l0bS8MMSgm27sArWi1LEy31HFWujXjqYHJc4Y3ksyA0EoYAhClJBWGW2Szphd0sdOXXXipiwgh7lXKD4YwXUJSnhDrAVzv1AL7WbKruN7uUqbyRH0ihGA9IZzU6M-c_91UmIicN4C1ndalfvfXMmIA"}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A3278020B31FA8206E4EA7E515337B3B33082B877651801085ED84FB4DAEB247BF698D7F8103010000', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;sx-oIG5Op-UVM3s7Mwgrh3ZRgBCF7YT7Ta6yR79pjX8?fpt=rsa-sha-256&cost=65536')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A382020880820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B98182010048E8945EFE007556D5BF4D5F249E4808F7307E29511D3262DAEF61D88098F9AA4A8BC0623A8C975738F65D6BF459D543F289D73CBC7AF4EA3A33FBF3EC4440447911D72294091E561833628E49A772ED608DE6C44595A91E3E17D6CF5EC3B2528D63D2ADD6463989B12EEC577DF6470960DF6832A9D84C360D1C217AD64C8625BDB594FB0ADA086CDECBBDE580D424BF9746D2F0C312826DBBB00AD68B52C4CB7D47156BA35E3A981C973863792CC80D04A180210A52415865B64B3A61774B1D3975D78A98B0821EE55CA0F86305D42529E10EB015CEFD402FB59B2ABB8DEEE52A6F2447D2284603D219CD4E8CF9CFFDD5498889C3780B59DD6A57EF7D732620', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A382020880820100E1EF8B24D6F76B09C81ED7752AA262F044F04A874D43809D31CEA612F99B0C97A8B4374153E3EEF3D66616843E0E41C293264B71B6173DB1CF0D6CD558C58657706FCF097F704C483E59CBFDFD5B3EE7BC80D740C5E0F047F3E85FC0D75815776A6F3F23C5DC5E797139A6882E38336A4A5FB36137620FF3663DBAE328472801862F72F2F87B202B9C89ADD7CD5B0A076F7C53E35039F67ED17EC815E5B4305CC63197068D5E6E579BA6DE5F4E3E57DF5E4E072FF2CE4C66EB452339738752759639F0257BF57DBD5C443FB5158CCE0A3D36ADC7BA01F33A0BB6DBB2BF989D607112F2344D993E77E563C1D361DEDF57DA96EF2CFC685F002B638246A5B309B98182010048E8945EFE007556D5BF4D5F249E4808F7307E29511D3262DAEF61D88098F9AA4A8BC0623A8C975738F65D6BF459D543F289D73CBC7AF4EA3A33FBF3EC4440447911D72294091E561833628E49A772ED608DE6C44595A91E3E17D6CF5EC3B2528D63D2ADD6463989B12EEC577DF6470960DF6832A9D84C360D1C217AD64C8625BDB594FB0ADA086CDECBBDE580D424BF9746D2F0C312826DBBB00AD68B52C4CB7D47156BA35E3A981C973863792CC80D04A180210A52415865B64B3A61774B1D3975D78A98B0821EE55CA0F86305D42529E10EB015CEFD402FB59B2ABB8DEEE52A6F2447D2284603D219CD4E8CF9CFFDD5498889C3780B59DD6A57EF7D732620')
    })
  })
  describe('0014_test-basic-rsa4096.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"QSAOQpYe6kYMgnbyOatmt2-PKGnqzMX56ZRcCrxjsUMGVvPaLSF6QzJ-6M4RJ9FKhddK9BL-k3A0W6a0QAPXca7dK6D8JQYn_fYWMa_WTpvucUsbr7afkBvutvlZsWpUsyippnTIg8r8T8L3sEdtvKqNm_1H9zTjRza_ZulzsxXCq_RyewYso8QCk261CEnhgV3RYEpgTe-maM_oI7AIv4979XzrG0HlGP9TrpEe-YgFcbPRdCNB1g48sr65PrXxePjve6DG8ikLmVXYPWD5Q9ZEVx7I1fBk2V8doedZ1pINhKVMvEl4NkCnsM89Ao5ifsetJakV9tjCSy4JkVKKAsW-8BBsGLPznFmZVut6J7M3MT3Pk-dYZ2BqSsWhq2-btETcHa0fVG-u3mrpNIhASQF2kTcdUe4dZQ785YGzDGhDCH5wFBkPRGAmfYlNUlgU3aNDuaBIncCMajQzR0LOowtJJRLSlXRSF91l7P7LnKGNIS-EpQbXACbtMyiWvSSmMFoMve6d_Yq7hQf4QOuUz6jpKOaRDCdfe2jRH5ZGPBAqWWYTR4aVvHZx-ycwkTnGzS8Vyn4kBS5H9ONO-LhE7DZKhb3JvoQlz_cqd76Y2QFphqZnEJgl8e8Y4IFwqHtDaOfBQsGdrRBgXE80HVIJmHrzGrqOLklj8-B5TdEfC3I"}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3082020480820200BBB0A1A314FF6A2FC79AE06F610DC8D4421C933ED0C4354E6AEAD91EF947EA4F8F632B2E2F78B8A07A78C3324895C7CB0916EB334C10090E5EDB9E0295ED2FF1DEAFD1F49F54412E43EDE2CB06CFFC395303309A4CE3EAC2341D9AF3188337EEBABD3D4A4AF8F43E157D6F02F9D1F24A42777049C930AA233FED5C63B07F725CDE6BB24404FCBFC0B87247EACB7DB044785BA66EDE8E792112470150401E0A8471BDE36F2D5ECB960F571BA17DAF381D8378DEC21E1012E4B376C9E6C46BB67D68EEF12BA9A15967F486D8BC91B3E2B06FA5FCA69B752426AF029CB149EA586DED851EBA160876ACD85F062271FAD73D15F5F0F022E261309226BEE3567AD052F9746CA8BFACF0D4F41730085C097A02028301D92A0C545C0397472C2EEE5B61222025D63470EE681CE3252747CE9CA23F19E66F2F6386E6AD13911D7ADACD38CE5CA8FF2C2D99ABB0F5C3BA847509613E6632A12CE6EF78DA4C820E90834053003D1197F6A57B0100FEE152C84C8B1B33BB96571988780FAFBD697CF8370A99DA8FAAF75687D951CC6533C78B8E1CE2E1D5CEB9A11629201AF437475C94027FA52614B4300B77DCF180AC49CAA340168F3262FD1EE8B13802CEA35754B423B833FA14C5DD0C476DDE5D5E7BF7374D61F248C3BAB91CB0550BD1CBEF70507EE8DB1CF399307E228D4F4592A66C58573CFECC63966806FAF88109CCB09923EA5B')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"QSAOQpYe6kYMgnbyOatmt2-PKGnqzMX56ZRcCrxjsUMGVvPaLSF6QzJ-6M4RJ9FKhddK9BL-k3A0W6a0QAPXca7dK6D8JQYn_fYWMa_WTpvucUsbr7afkBvutvlZsWpUsyippnTIg8r8T8L3sEdtvKqNm_1H9zTjRza_ZulzsxXCq_RyewYso8QCk261CEnhgV3RYEpgTe-maM_oI7AIv4979XzrG0HlGP9TrpEe-YgFcbPRdCNB1g48sr65PrXxePjve6DG8ikLmVXYPWD5Q9ZEVx7I1fBk2V8doedZ1pINhKVMvEl4NkCnsM89Ao5ifsetJakV9tjCSy4JkVKKAsW-8BBsGLPznFmZVut6J7M3MT3Pk-dYZ2BqSsWhq2-btETcHa0fVG-u3mrpNIhASQF2kTcdUe4dZQ785YGzDGhDCH5wFBkPRGAmfYlNUlgU3aNDuaBIncCMajQzR0LOowtJJRLSlXRSF91l7P7LnKGNIS-EpQbXACbtMyiWvSSmMFoMve6d_Yq7hQf4QOuUz6jpKOaRDCdfe2jRH5ZGPBAqWWYTR4aVvHZx-ycwkTnGzS8Vyn4kBS5H9ONO-LhE7DZKhb3JvoQlz_cqd76Y2QFphqZnEJgl8e8Y4IFwqHtDaOfBQsGdrRBgXE80HVIJmHrzGrqOLklj8-B5TdEfC3I"}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A382040880820200BBB0A1A314FF6A2FC79AE06F610DC8D4421C933ED0C4354E6AEAD91EF947EA4F8F632B2E2F78B8A07A78C3324895C7CB0916EB334C10090E5EDB9E0295ED2FF1DEAFD1F49F54412E43EDE2CB06CFFC395303309A4CE3EAC2341D9AF3188337EEBABD3D4A4AF8F43E157D6F02F9D1F24A42777049C930AA233FED5C63B07F725CDE6BB24404FCBFC0B87247EACB7DB044785BA66EDE8E792112470150401E0A8471BDE36F2D5ECB960F571BA17DAF381D8378DEC21E1012E4B376C9E6C46BB67D68EEF12BA9A15967F486D8BC91B3E2B06FA5FCA69B752426AF029CB149EA586DED851EBA160876ACD85F062271FAD73D15F5F0F022E261309226BEE3567AD052F9746CA8BFACF0D4F41730085C097A02028301D92A0C545C0397472C2EEE5B61222025D63470EE681CE3252747CE9CA23F19E66F2F6386E6AD13911D7ADACD38CE5CA8FF2C2D99ABB0F5C3BA847509613E6632A12CE6EF78DA4C820E90834053003D1197F6A57B0100FEE152C84C8B1B33BB96571988780FAFBD697CF8370A99DA8FAAF75687D951CC6533C78B8E1CE2E1D5CEB9A11629201AF437475C94027FA52614B4300B77DCF180AC49CAA340168F3262FD1EE8B13802CEA35754B423B833FA14C5DD0C476DDE5D5E7BF7374D61F248C3BAB91CB0550BD1CBEF70507EE8DB1CF399307E228D4F4592A66C58573CFECC63966806FAF88109CCB09923EA5B8182020041200E42961EEA460C8276F239AB66B76F8F2869EACCC5F9E9945C0ABC63B1430656F3DA2D217A43327EE8CE1127D14A85D74AF412FE9370345BA6B44003D771AEDD2BA0FC250627FDF61631AFD64E9BEE714B1BAFB69F901BEEB6F959B16A54B328A9A674C883CAFC4FC2F7B0476DBCAA8D9BFD47F734E34736BF66E973B315C2ABF4727B062CA3C402936EB50849E1815DD1604A604DEFA668CFE823B008BF8F7BF57CEB1B41E518FF53AE911EF9880571B3D1742341D60E3CB2BEB93EB5F178F8EF7BA0C6F2290B9955D83D60F943D644571EC8D5F064D95F1DA1E759D6920D84A54CBC49783640A7B0CF3D028E627EC7AD25A915F6D8C24B2E0991528A02C5BEF0106C18B3F39C599956EB7A27B337313DCF93E75867606A4AC5A1AB6F9BB444DC1DAD1F546FAEDE6AE934884049017691371D51EE1D650EFCE581B30C6843087E7014190F4460267D894D525814DDA343B9A0489DC08C6A34334742CEA30B492512D295745217DD65ECFECB9CA18D212F84A506D70026ED332896BD24A6305A0CBDEE9DFD8ABB8507F840EB94CFA8E928E6910C275F7B68D11F96463C102A596613478695BC7671FB27309139C6CD2F15CA7E24052E47F4E34EF8B844EC364A85BDC9BE8425CFF72A77BE98D9016986A667109825F1EF18E08170A87B4368E7C142C19DAD10605C4F341D5209987AF31ABA8E2E4963F3E0794DD11F0B72')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"rsa-sha-256","modulus":"u7ChoxT_ai_HmuBvYQ3I1EIckz7QxDVOaurZHvlH6k-PYysuL3i4oHp4wzJIlcfLCRbrM0wQCQ5e254Cle0v8d6v0fSfVEEuQ-3iywbP_DlTAzCaTOPqwjQdmvMYgzfuur09Skr49D4VfW8C-dHySkJ3cEnJMKojP-1cY7B_clzea7JEBPy_wLhyR-rLfbBEeFumbt6OeSESRwFQQB4KhHG9428tXsuWD1cboX2vOB2DeN7CHhAS5LN2yebEa7Z9aO7xK6mhWWf0hti8kbPisG-l_KabdSQmrwKcsUnqWG3thR66Fgh2rNhfBiJx-tc9FfXw8CLiYTCSJr7jVnrQUvl0bKi_rPDU9BcwCFwJegICgwHZKgxUXAOXRywu7lthIiAl1jRw7mgc4yUnR86coj8Z5m8vY4bmrRORHXrazTjOXKj_LC2Zq7D1w7qEdQlhPmYyoSzm73jaTIIOkINAUwA9EZf2pXsBAP7hUshMixszu5ZXGYh4D6-9aXz4NwqZ2o-q91aH2VHMZTPHi44c4uHVzrmhFikgGvQ3R1yUAn-lJhS0MAt33PGArEnKo0AWjzJi_R7osTgCzqNXVLQjuDP6FMXdDEdt3l1ee_c3TWHySMO6uRywVQvRy-9wUH7o2xzzmTB-Io1PRZKmbFhXPP7MY5ZoBvr4gQnMsJkj6ls","signature":"QSAOQpYe6kYMgnbyOatmt2-PKGnqzMX56ZRcCrxjsUMGVvPaLSF6QzJ-6M4RJ9FKhddK9BL-k3A0W6a0QAPXca7dK6D8JQYn_fYWMa_WTpvucUsbr7afkBvutvlZsWpUsyippnTIg8r8T8L3sEdtvKqNm_1H9zTjRza_ZulzsxXCq_RyewYso8QCk261CEnhgV3RYEpgTe-maM_oI7AIv4979XzrG0HlGP9TrpEe-YgFcbPRdCNB1g48sr65PrXxePjve6DG8ikLmVXYPWD5Q9ZEVx7I1fBk2V8doedZ1pINhKVMvEl4NkCnsM89Ao5ifsetJakV9tjCSy4JkVKKAsW-8BBsGLPznFmZVut6J7M3MT3Pk-dYZ2BqSsWhq2-btETcHa0fVG-u3mrpNIhASQF2kTcdUe4dZQ785YGzDGhDCH5wFBkPRGAmfYlNUlgU3aNDuaBIncCMajQzR0LOowtJJRLSlXRSF91l7P7LnKGNIS-EpQbXACbtMyiWvSSmMFoMve6d_Yq7hQf4QOuUz6jpKOaRDCdfe2jRH5ZGPBAqWWYTR4aVvHZx-ycwkTnGzS8Vyn4kBS5H9ONO-LhE7DZKhb3JvoQlz_cqd76Y2QFphqZnEJgl8e8Y4IFwqHtDaOfBQsGdrRBgXE80HVIJmHrzGrqOLklj8-B5TdEfC3I"}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A32780204DD2EA7F85B3EACB8F19058E8360955C32E74C124392A1F44660739709C539C38103040000', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;TdLqf4Wz6suPGQWOg2CVXDLnTBJDkqH0RmBzlwnFOcM?fpt=rsa-sha-256&cost=262144')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A382040880820200BBB0A1A314FF6A2FC79AE06F610DC8D4421C933ED0C4354E6AEAD91EF947EA4F8F632B2E2F78B8A07A78C3324895C7CB0916EB334C10090E5EDB9E0295ED2FF1DEAFD1F49F54412E43EDE2CB06CFFC395303309A4CE3EAC2341D9AF3188337EEBABD3D4A4AF8F43E157D6F02F9D1F24A42777049C930AA233FED5C63B07F725CDE6BB24404FCBFC0B87247EACB7DB044785BA66EDE8E792112470150401E0A8471BDE36F2D5ECB960F571BA17DAF381D8378DEC21E1012E4B376C9E6C46BB67D68EEF12BA9A15967F486D8BC91B3E2B06FA5FCA69B752426AF029CB149EA586DED851EBA160876ACD85F062271FAD73D15F5F0F022E261309226BEE3567AD052F9746CA8BFACF0D4F41730085C097A02028301D92A0C545C0397472C2EEE5B61222025D63470EE681CE3252747CE9CA23F19E66F2F6386E6AD13911D7ADACD38CE5CA8FF2C2D99ABB0F5C3BA847509613E6632A12CE6EF78DA4C820E90834053003D1197F6A57B0100FEE152C84C8B1B33BB96571988780FAFBD697CF8370A99DA8FAAF75687D951CC6533C78B8E1CE2E1D5CEB9A11629201AF437475C94027FA52614B4300B77DCF180AC49CAA340168F3262FD1EE8B13802CEA35754B423B833FA14C5DD0C476DDE5D5E7BF7374D61F248C3BAB91CB0550BD1CBEF70507EE8DB1CF399307E228D4F4592A66C58573CFECC63966806FAF88109CCB09923EA5B8182020041200E42961EEA460C8276F239AB66B76F8F2869EACCC5F9E9945C0ABC63B1430656F3DA2D217A43327EE8CE1127D14A85D74AF412FE9370345BA6B44003D771AEDD2BA0FC250627FDF61631AFD64E9BEE714B1BAFB69F901BEEB6F959B16A54B328A9A674C883CAFC4FC2F7B0476DBCAA8D9BFD47F734E34736BF66E973B315C2ABF4727B062CA3C402936EB50849E1815DD1604A604DEFA668CFE823B008BF8F7BF57CEB1B41E518FF53AE911EF9880571B3D1742341D60E3CB2BEB93EB5F178F8EF7BA0C6F2290B9955D83D60F943D644571EC8D5F064D95F1DA1E759D6920D84A54CBC49783640A7B0CF3D028E627EC7AD25A915F6D8C24B2E0991528A02C5BEF0106C18B3F39C599956EB7A27B337313DCF93E75867606A4AC5A1AB6F9BB444DC1DAD1F546FAEDE6AE934884049017691371D51EE1D650EFCE581B30C6843087E7014190F4460267D894D525814DDA343B9A0489DC08C6A34334742CEA30B492512D295745217DD65ECFECB9CA18D212F84A506D70026ED332896BD24A6305A0CBDEE9DFD8ABB8507F840EB94CFA8E928E6910C275F7B68D11F96463C102A596613478695BC7671FB27309139C6CD2F15CA7E24052E47F4E34EF8B844EC364A85BDC9BE8425CFF72A77BE98D9016986A667109825F1EF18E08170A87B4368E7C142C19DAD10605C4F341D5209987AF31ABA8E2E4963F3E0794DD11F0B72', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A382040880820200BBB0A1A314FF6A2FC79AE06F610DC8D4421C933ED0C4354E6AEAD91EF947EA4F8F632B2E2F78B8A07A78C3324895C7CB0916EB334C10090E5EDB9E0295ED2FF1DEAFD1F49F54412E43EDE2CB06CFFC395303309A4CE3EAC2341D9AF3188337EEBABD3D4A4AF8F43E157D6F02F9D1F24A42777049C930AA233FED5C63B07F725CDE6BB24404FCBFC0B87247EACB7DB044785BA66EDE8E792112470150401E0A8471BDE36F2D5ECB960F571BA17DAF381D8378DEC21E1012E4B376C9E6C46BB67D68EEF12BA9A15967F486D8BC91B3E2B06FA5FCA69B752426AF029CB149EA586DED851EBA160876ACD85F062271FAD73D15F5F0F022E261309226BEE3567AD052F9746CA8BFACF0D4F41730085C097A02028301D92A0C545C0397472C2EEE5B61222025D63470EE681CE3252747CE9CA23F19E66F2F6386E6AD13911D7ADACD38CE5CA8FF2C2D99ABB0F5C3BA847509613E6632A12CE6EF78DA4C820E90834053003D1197F6A57B0100FEE152C84C8B1B33BB96571988780FAFBD697CF8370A99DA8FAAF75687D951CC6533C78B8E1CE2E1D5CEB9A11629201AF437475C94027FA52614B4300B77DCF180AC49CAA340168F3262FD1EE8B13802CEA35754B423B833FA14C5DD0C476DDE5D5E7BF7374D61F248C3BAB91CB0550BD1CBEF70507EE8DB1CF399307E228D4F4592A66C58573CFECC63966806FAF88109CCB09923EA5B8182020041200E42961EEA460C8276F239AB66B76F8F2869EACCC5F9E9945C0ABC63B1430656F3DA2D217A43327EE8CE1127D14A85D74AF412FE9370345BA6B44003D771AEDD2BA0FC250627FDF61631AFD64E9BEE714B1BAFB69F901BEEB6F959B16A54B328A9A674C883CAFC4FC2F7B0476DBCAA8D9BFD47F734E34736BF66E973B315C2ABF4727B062CA3C402936EB50849E1815DD1604A604DEFA668CFE823B008BF8F7BF57CEB1B41E518FF53AE911EF9880571B3D1742341D60E3CB2BEB93EB5F178F8EF7BA0C6F2290B9955D83D60F943D644571EC8D5F064D95F1DA1E759D6920D84A54CBC49783640A7B0CF3D028E627EC7AD25A915F6D8C24B2E0991528A02C5BEF0106C18B3F39C599956EB7A27B337313DCF93E75867606A4AC5A1AB6F9BB444DC1DAD1F546FAEDE6AE934884049017691371D51EE1D650EFCE581B30C6843087E7014190F4460267D894D525814DDA343B9A0489DC08C6A34334742CEA30B492512D295745217DD65ECFECB9CA18D212F84A506D70026ED332896BD24A6305A0CBDEE9DFD8ABB8507F840EB94CFA8E928E6910C275F7B68D11F96463C102A596613478695BC7671FB27309139C6CD2F15CA7E24052E47F4E34EF8B844EC364A85BDC9BE8425CFF72A77BE98D9016986A667109825F1EF18E08170A87B4368E7C142C19DAD10605C4F341D5209987AF31ABA8E2E4963F3E0794DD11F0B72')
    })
  })
  describe('0015_test-basic-ed25519.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '30228020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"ed25519-sha-256","publicKey":"11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo","signature":"UGoepoMY5i1AY12tBD4Zh-vCbltcRAb3vfhacziPv-XCRaxJ9HcOvHh3CCcKpqh2n-_okw_Q6h7mSzFAfXaVCQ"}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A4278020799239ABA8FC4FF7EABFBC4C44E69E8BDFED993324E12ED64792ABE289CF1D5F8103020000', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;eZI5q6j8T_fqv7xMROaei9_tmTMk4S7WR5Kr4onPHV8?fpt=ed25519-sha-256&cost=131072')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A4648020D75A980182B10AB7D54BFED3C964073A0EE172F3DAA62325AF021A68F707511A8140506A1EA68318E62D40635DAD043E1987EBC26E5B5C4406F7BDF85A73388FBFE5C245AC49F4770EBC787708270AA6A8769FEFE8930FD0EA1EE64B31407D769509')
    })
  })
  describe('0016_test-advanced-notarized-receipt.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ","subfulfillment":{"type":"ed25519-sha-256","publicKey":"LlMeiL_oxBn5Ya2ckB3ivdjnoOcUhFUFnonreZhrJSQ","signature":"5f3bvsLo21m8tqaA5KcFb91GUAtOmaNxnyVzUDahSSg-KHzt7c2eWlDNl2q0EfhP9Wmqveb24M5qC90MSoJGCA"}},{"type":"preimage-sha-256","preimage":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3059800102A154A02580200B4AC3A1E0932CB71B74309FAD7D15DF51BD4D1359ED59FF7C917B35DF24464A810150A12B80203F94525555CF4C5234BF77CB108501D97B9D8A28D1E7A3A7FE8D3D7F031FDEBD810302045082020308')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22B802009E391004628725E88F8557E954FB2A0EAE2B7C151C47DF3C4AF22F8C16988F98103020CA0820203C8')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ","subfulfillment":{"type":"ed25519-sha-256","publicKey":"LlMeiL_oxBn5Ya2ckB3ivdjnoOcUhFUFnonreZhrJSQ","signature":"5f3bvsLo21m8tqaA5KcFb91GUAtOmaNxnyVzUDahSSg-KHzt7c2eWlDNl2q0EfhP9Wmqveb24M5qC90MSoJGCA"}},{"type":"preimage-sha-256","preimage":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A282011AA0820114A052805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564A181BD805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564810100A266A46480202E531E88BFE8C419F961AD9C901DE2BDD8E7A0E7148455059E89EB79986B25248140E5FDDBBEC2E8DB59BCB6A680E4A7056FDD46500B4E99A3719F25735036A149283E287CEDEDCD9E5A50CD976AB411F84FF569AABDE6F6E0CE6A0BDD0C4A824608A100')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ","subfulfillment":{"type":"ed25519-sha-256","publicKey":"LlMeiL_oxBn5Ya2ckB3ivdjnoOcUhFUFnonreZhrJSQ","signature":"5f3bvsLo21m8tqaA5KcFb91GUAtOmaNxnyVzUDahSSg-KHzt7c2eWlDNl2q0EfhP9Wmqveb24M5qC90MSoJGCA"}},{"type":"preimage-sha-256","preimage":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22B802009E391004628725E88F8557E954FB2A0EAE2B7C151C47DF3C4AF22F8C16988F98103020CA0820203C8', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;CeORAEYocl6I-FV-lU-yoOrit8FRxH3zxK8i-MFpiPk?fpt=threshold-sha-256&cost=134304&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A282011AA0820114A052805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564A181BD805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564810100A266A46480202E531E88BFE8C419F961AD9C901DE2BDD8E7A0E7148455059E89EB79986B25248140E5FDDBBEC2E8DB59BCB6A680E4A7056FDD46500B4E99A3719F25735036A149283E287CEDEDCD9E5A50CD976AB411F84FF569AABDE6F6E0CE6A0BDD0C4A824608A100', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A282011AA0820114A052805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564A181BD805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564810100A266A46480202E531E88BFE8C419F961AD9C901DE2BDD8E7A0E7148455059E89EB79986B25248140E5FDDBBEC2E8DB59BCB6A680E4A7056FDD46500B4E99A3719F25735036A149283E287CEDEDCD9E5A50CD976AB411F84FF569AABDE6F6E0CE6A0BDD0C4A824608A100')
    })
  })
  describe('0017_test-advanced-notarized-receipt-multiple-notaries.json', function () {
    it('should correctly parse and reserialize the condition', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly generate the fingerprint contents', function () {
      const fulfillment = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"Y2FzZXMvNjU3YzEyZGEtOGRjYS00M2IwLTk3Y2EtOGVlOGMzOGFiOWY3L3N0YXRlL2V4ZWN1dGVk","subfulfillment":{"type":"threshold-sha-256","threshold":3,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":1025,"prefix":"aHR0cHM6Ly9ub3Rhcnk0LmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"Rkvo5cq-MB4FMv5iIUjPy8zxG_MXop9cyHg5xpUf6pg","signature":"rlayC5_mc7O1szd9hCV8kIVronrH_IYj89BwVubxNmV2CacPp9ASs8UqqLrQPtxIKp7kA-aA5IPjr1mlxK05BA"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkxLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"LlMeiL_oxBn5Ya2ckB3ivdjnoOcUhFUFnonreZhrJSQ","signature":"hzAaGAj3PCA_DpyBBvEwcQiB2s2sgHwQ00m3mCDcs0B8d7nSPbQoJ2QL3EE4P9xOynYZwXA36HA3pcfPM4F6Dg"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkyLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"WQI-doqchYdsYeuqo07BjmSFf6dmksVamWNfm4jlr5A","signature":"rPnug4hbpY9ixCtImejOqRWpGS90iMFZLOlZVgtS-Ho3kOA208aVS4dVQUjRMcy682nGimajE3_o-kNooWWgCg"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkzLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"mpisbb_wkOluONgfBUd9-Gs7uw7_wxG8e0LNrJnWvdk","signature":"l6MrDGHOFRA2ytNZacn5XrVEZepdYpupZav4pqkX8Q3RSr5V0zBUQ45oyRWmtnwd34oMFtLYAfjQuoXv7pu_Dw"}}]}},{"type":"preimage-sha-256","preimage":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ"}]}'))
      const fingerprintContents = fulfillment.getFingerprintContents()

      assert.equal(fingerprintContents.toString('hex').toUpperCase(), '3059800102A154A02580200B4AC3A1E0932CB71B74309FAD7D15DF51BD4D1359ED59FF7C917B35DF24464A810150A12B8020062F2C1BDD08661FE7FEFAC20E02DA8B0184FCD36F6C6C54C53CC28D2E54DD118103062C8282020328')
    })

    it('should correctly serialize the condition to binary', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
      const generatedCondition = parsedCondition.serializeBinary()

      assert.equal(generatedCondition.toString('hex').toUpperCase(), 'A22B8020424A704949529267B621B3D79119D729B2382CED8B296C3C028FA97D350F6D0781030634D2820203C8')
    })

    it('should correctly serialize the condition from a URI', function () {
      const parsedCondition = cc.fromConditionUri('ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
      const generatedCondition = parsedCondition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly serialize the fulfillment from json', function () {
      const jsonData = JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"Y2FzZXMvNjU3YzEyZGEtOGRjYS00M2IwLTk3Y2EtOGVlOGMzOGFiOWY3L3N0YXRlL2V4ZWN1dGVk","subfulfillment":{"type":"threshold-sha-256","threshold":3,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":1025,"prefix":"aHR0cHM6Ly9ub3Rhcnk0LmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"Rkvo5cq-MB4FMv5iIUjPy8zxG_MXop9cyHg5xpUf6pg","signature":"rlayC5_mc7O1szd9hCV8kIVronrH_IYj89BwVubxNmV2CacPp9ASs8UqqLrQPtxIKp7kA-aA5IPjr1mlxK05BA"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkxLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"LlMeiL_oxBn5Ya2ckB3ivdjnoOcUhFUFnonreZhrJSQ","signature":"hzAaGAj3PCA_DpyBBvEwcQiB2s2sgHwQ00m3mCDcs0B8d7nSPbQoJ2QL3EE4P9xOynYZwXA36HA3pcfPM4F6Dg"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkyLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"WQI-doqchYdsYeuqo07BjmSFf6dmksVamWNfm4jlr5A","signature":"rPnug4hbpY9ixCtImejOqRWpGS90iMFZLOlZVgtS-Ho3kOA208aVS4dVQUjRMcy682nGimajE3_o-kNooWWgCg"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkzLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"mpisbb_wkOluONgfBUd9-Gs7uw7_wxG8e0LNrJnWvdk","signature":"l6MrDGHOFRA2ytNZacn5XrVEZepdYpupZav4pqkX8Q3RSr5V0zBUQ45oyRWmtnwd34oMFtLYAfjQuoXv7pu_Dw"}}]}},{"type":"preimage-sha-256","preimage":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ"}]}')
      const fulfillment = cc.fromJson(jsonData).serializeBinary()

      assert.equal(fulfillment.toString('hex').toUpperCase(), 'A2820272A082026CA052805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564A1820214803963617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564810100A28201D2A28201CEA082019BA18186801868747470733A2F2F6E6F74617279312E6578616D706C652F81020400A266A46480202E531E88BFE8C419F961AD9C901DE2BDD8E7A0E7148455059E89EB79986B2524814087301A1808F73C203F0E9C8106F130710881DACDAC807C10D349B79820DCB3407C77B9D23DB42827640BDC41383FDC4ECA7619C17037E87037A5C7CF33817A0EA18186801868747470733A2F2F6E6F74617279322E6578616D706C652F81020400A266A464802059023E768A9C85876C61EBAAA34EC18E64857FA76692C55A99635F9B88E5AF908140ACF9EE83885BA58F62C42B4899E8CEA915A9192F7488C1592CE959560B52F87A3790E036D3C6954B87554148D131CCBAF369C68A66A3137FE8FA4368A165A00AA18186801868747470733A2F2F6E6F74617279332E6578616D706C652F81020400A266A46480209A98AC6DBFF090E96E38D81F05477DF86B3BBB0EFFC311BC7B42CDAC99D6BDD9814097A32B0C61CE151036CAD35969C9F95EB54465EA5D629BA965ABF8A6A917F10DD14ABE55D33054438E68C915A6B67C1DDF8A0C16D2D801F8D0BA85EFEE9BBF0FA12DA12B8020EE0BC02F977C264B6C306ED1B168FEB4FD600950AD21750CE8A86ECBD4603538810302081982020308A100')
    })

    it('should correctly serialize the condition URI from json', function () {
      const generatedCondition = cc.fromJson(JSON.parse('{"type":"threshold-sha-256","threshold":2,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":0,"prefix":"Y2FzZXMvNjU3YzEyZGEtOGRjYS00M2IwLTk3Y2EtOGVlOGMzOGFiOWY3L3N0YXRlL2V4ZWN1dGVk","subfulfillment":{"type":"threshold-sha-256","threshold":3,"subfulfillments":[{"type":"prefix-sha-256","maxMessageLength":1025,"prefix":"aHR0cHM6Ly9ub3Rhcnk0LmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"Rkvo5cq-MB4FMv5iIUjPy8zxG_MXop9cyHg5xpUf6pg","signature":"rlayC5_mc7O1szd9hCV8kIVronrH_IYj89BwVubxNmV2CacPp9ASs8UqqLrQPtxIKp7kA-aA5IPjr1mlxK05BA"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkxLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"LlMeiL_oxBn5Ya2ckB3ivdjnoOcUhFUFnonreZhrJSQ","signature":"hzAaGAj3PCA_DpyBBvEwcQiB2s2sgHwQ00m3mCDcs0B8d7nSPbQoJ2QL3EE4P9xOynYZwXA36HA3pcfPM4F6Dg"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkyLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"WQI-doqchYdsYeuqo07BjmSFf6dmksVamWNfm4jlr5A","signature":"rPnug4hbpY9ixCtImejOqRWpGS90iMFZLOlZVgtS-Ho3kOA208aVS4dVQUjRMcy682nGimajE3_o-kNooWWgCg"}},{"type":"prefix-sha-256","maxMessageLength":1024,"prefix":"aHR0cHM6Ly9ub3RhcnkzLmV4YW1wbGUv","subfulfillment":{"type":"ed25519-sha-256","publicKey":"mpisbb_wkOluONgfBUd9-Gs7uw7_wxG8e0LNrJnWvdk","signature":"l6MrDGHOFRA2ytNZacn5XrVEZepdYpupZav4pqkX8Q3RSr5V0zBUQ45oyRWmtnwd34oMFtLYAfjQuoXv7pu_Dw"}}]}},{"type":"preimage-sha-256","preimage":"aHR0cHM6Ly9ub3RhcnkuZXhhbXBsZS9jYXNlcy82NTdjMTJkYS04ZGNhLTQzYjAtOTdjYS04ZWU4YzM4YWI5Zjcvc3RhdGUvZXhlY3V0ZWQ"}]}')).getConditionUri()

      assert.equal(generatedCondition, 'ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly parse the condition binary', function () {
      const condition = cc.fromConditionBinary(Buffer.from('A22B8020424A704949529267B621B3D79119D729B2382CED8B296C3C028FA97D350F6D0781030634D2820203C8', 'hex'))
      const generatedCondition = condition.serializeUri()

      assert.equal(generatedCondition, 'ni:///sha-256;QkpwSUlSkme2IbPXkRnXKbI4LO2LKWw8Ao-pfTUPbQc?fpt=threshold-sha-256&cost=406738&subtypes=ed25519-sha-256,prefix-sha-256,preimage-sha-256')
    })

    it('should correctly parse and reencode the fulfillment binary', function () {
      const fulfillment = cc.fromFulfillmentUri(Buffer.from('A2820272A082026CA052805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564A1820214803963617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564810100A28201D2A28201CEA082019BA18186801868747470733A2F2F6E6F74617279312E6578616D706C652F81020400A266A46480202E531E88BFE8C419F961AD9C901DE2BDD8E7A0E7148455059E89EB79986B2524814087301A1808F73C203F0E9C8106F130710881DACDAC807C10D349B79820DCB3407C77B9D23DB42827640BDC41383FDC4ECA7619C17037E87037A5C7CF33817A0EA18186801868747470733A2F2F6E6F74617279322E6578616D706C652F81020400A266A464802059023E768A9C85876C61EBAAA34EC18E64857FA76692C55A99635F9B88E5AF908140ACF9EE83885BA58F62C42B4899E8CEA915A9192F7488C1592CE959560B52F87A3790E036D3C6954B87554148D131CCBAF369C68A66A3137FE8FA4368A165A00AA18186801868747470733A2F2F6E6F74617279332E6578616D706C652F81020400A266A46480209A98AC6DBFF090E96E38D81F05477DF86B3BBB0EFFC311BC7B42CDAC99D6BDD9814097A32B0C61CE151036CAD35969C9F95EB54465EA5D629BA965ABF8A6A917F10DD14ABE55D33054438E68C915A6B67C1DDF8A0C16D2D801F8D0BA85EFEE9BBF0FA12DA12B8020EE0BC02F977C264B6C306ED1B168FEB4FD600950AD21750CE8A86ECBD4603538810302081982020308A100', 'hex').toString('base64'))
      const generatedFulfillment = fulfillment.serializeBase64Url()

      assert.equal(Buffer.from(generatedFulfillment, 'base64').toString('hex').toUpperCase(), 'A2820272A082026CA052805068747470733A2F2F6E6F746172792E6578616D706C652F63617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564A1820214803963617365732F36353763313264612D386463612D343362302D393763612D3865653863333861623966372F73746174652F6578656375746564810100A28201D2A28201CEA082019BA18186801868747470733A2F2F6E6F74617279312E6578616D706C652F81020400A266A46480202E531E88BFE8C419F961AD9C901DE2BDD8E7A0E7148455059E89EB79986B2524814087301A1808F73C203F0E9C8106F130710881DACDAC807C10D349B79820DCB3407C77B9D23DB42827640BDC41383FDC4ECA7619C17037E87037A5C7CF33817A0EA18186801868747470733A2F2F6E6F74617279322E6578616D706C652F81020400A266A464802059023E768A9C85876C61EBAAA34EC18E64857FA76692C55A99635F9B88E5AF908140ACF9EE83885BA58F62C42B4899E8CEA915A9192F7488C1592CE959560B52F87A3790E036D3C6954B87554148D131CCBAF369C68A66A3137FE8FA4368A165A00AA18186801868747470733A2F2F6E6F74617279332E6578616D706C652F81020400A266A46480209A98AC6DBFF090E96E38D81F05477DF86B3BBB0EFFC311BC7B42CDAC99D6BDD9814097A32B0C61CE151036CAD35969C9F95EB54465EA5D629BA965ABF8A6A917F10DD14ABE55D33054438E68C915A6B67C1DDF8A0C16D2D801F8D0BA85EFEE9BBF0FA12DA12B8020EE0BC02F977C264B6C306ED1B168FEB4FD600950AD21750CE8A86ECBD4603538810302081982020308A100')
    })
  })
})
