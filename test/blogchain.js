const Blogchain = artifacts.require('./Blogchain.sol')

contract('Blogchain', function ([owner, user]) {
    let blogchain

    beforeEach('setup contract for each test', async function () {
        blogchain = await Blogchain.new(owner)
    })

    it('has an owner', async function () {
        assert.equal(await blogchain.owner(), owner)
    })

    it('can subscribe', async function () {
      blogchain.subscribe('willy');
        assert.equal(await blogchain.users[0].name, 'willy')
    })
})
