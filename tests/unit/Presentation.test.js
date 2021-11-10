// @ts-check

import { createPresentationRequest } from '../../src/effects/Presentation';

test('createPresentationRequest returns AsyncEffect', async () => {
    expect(
        await createPresentationRequest({
            tenant: 'tenant',
            accessToken: 'token',
            requestId: 'id',
            did: 'did:key:code',
            templateId: 'id',
            callbackURL: 'url'
        }).inspect().startsWith('AsyncEffect')
    )
    .toBe(true);
});

test('createPresentationRequest called with no input returns error', async () => {
    // @ts-ignore
    await createPresentationRequest()
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});

test('createPresentationRequest called with payload without tenant returns error', async () => {
    // @ts-ignore
    await createPresentationRequest({
        accessToken: 'token',
        requestId: 'id',
        did: 'did:key:code',
        templateId: 'id',
        callbackURL: 'url'
    })
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload.tenant is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});

test('createPresentationRequest called with payload without accessToken returns error', async () => {
    // @ts-ignore
    await createPresentationRequest({
        tenant: 'tenant',
        requestId: 'id',
        did: 'did:key:code',
        templateId: 'id',
        callbackURL: 'url'
    })
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload.accessToken is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});

test('createPresentationRequest called with payload without requestId returns error', async () => {
    // @ts-ignore
    await createPresentationRequest({
        tenant: 'tenant',
        accessToken: 'token',
        did: 'did:key:code',
        templateId: 'id',
        callbackURL: 'url'
    })
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload.requestId is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});

test('createPresentationRequest called with payload without did returns error', async () => {
    // @ts-ignore
    await createPresentationRequest({
        tenant: 'tenant',
        accessToken: 'token',
        requestId: 'id',
        templateId: 'id',
        callbackURL: 'url'
    })
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload.did is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});

test('createPresentationRequest called with payload without templateId returns error', async () => {
    // @ts-ignore
    await createPresentationRequest({
        tenant: 'tenant',
        accessToken: 'token',
        requestId: 'id',
        did: 'did:key:code',
        callbackURL: 'url'
    })
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload.templateId is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});

test('createPresentationRequest called with payload without callbackURL returns error', async () => {
    // @ts-ignore
    await createPresentationRequest({
        tenant: 'tenant',
        accessToken: 'token',
        requestId: 'id',
        did: 'did:key:code',
        templateId: 'id'
    })
    .trigger
    (error => {
        expect(error).toBe('createPresentationRequest payload.callbackURL is Nothing.');
        return true;
    })
    (result => fail(`This should not resolve with result ${result}`))
});