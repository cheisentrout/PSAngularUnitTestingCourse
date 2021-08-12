import { ExpectedConditions } from 'protractor';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service;

  beforeEach(() => {
    service = new MessageService();
  });

  // TEST 1 - initial state of message service
  it('should have no messages to start', () => {
    /*==== ARRANGE ====*/
    service = new MessageService();

    // how to test that there are no messages in the array?
    // check that it's length is 0

    /*==== ASSERT ====*/
    expect(service.messages.length).toBe(0);
  });

  // TEST 2 - the add function of message service
  it('should add a message when add is called', () => {
    /*==== ARRANGE ====*/
    service = new MessageService();

    /*==== ACT ====*/
    service.add('message1 test added');

    /*==== ASSERT ====*/
    expect(service.messages.length).toBe(1);
  });

  // TEST 3 - the clear function of message service
  it('should remove all messages when clear is called', () => {
    /*==== ARRANGE ====*/
    // new, blank message service
    service = new MessageService();
    // add a message so there's something to clear --
    service.add('message to test clear function');

    /*==== ACT ====*/
    service.clear();

    /*==== ASSERT ====*/
    expect(service.messages.length).toBe(0);
  });
});
