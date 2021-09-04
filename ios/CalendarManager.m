//
//  CalendarManager.m
//  MyRNApp
//
//  Created by devime on 2021/9/4.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
#import <React/RCTUtils.h>

@implementation CalendarManager

{
  bool hasListeners;
}

RCT_EXPORT_MODULE(MyCalendarModule);

-(void) startObserving
{
  hasListeners = YES;
}

-(void) stopObserving
{
  hasListeners = NO;
}

RCT_EXPORT_METHOD(addEvent: (NSString *) name details: (NSDictionary *) details)
{
  
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate: details[@"time"]];
  
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, time);
  
  [self calendarSendEvent:details];
}

RCT_EXPORT_METHOD(findEvents: (RCTResponseSenderBlock) callback)
{
  callback(@[RCTMakeError(@"find events error", NULL, NULL), @"welcome"]);
}

RCT_EXPORT_METHOD(findEventsWithResolver: (RCTPromiseResolveBlock) resolve rejecter: (RCTPromiseRejectBlock) reject)
{
  NSArray *events = [NSArray arrayWithObjects:@"1", @"2", nil];
  
  if(events) {
    resolve(events);
  } else {
    NSError *error = @"no data";
    reject(@"no_events", @"There were no events", error);
  }
}

-(NSDictionary *) constantsToExport
{
  return @{@"firstDayOfTheWeek": @"Monday"};
}

+(BOOL) requiresMainQueueSetup
{
  return YES;
}

-(NSArray<NSString *> *)supportedEvents
{
  return @[@"SendEvent"];
}

-(void) calendarSendEvent: (NSDictionary *) dictionary
{
  [self sendEventWithName:@"SendEvent" body:@{@"name": dictionary[@"name"], @"secondName": @"乐"}];
}



@end
