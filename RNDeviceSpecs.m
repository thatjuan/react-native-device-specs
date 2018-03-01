//
//  UIDeviceHardware.m
//  PeachMobile
//
//  Created by Eric Sauter on 5/6/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RNDeviceSpecs.h"
#include <sys/types.h>
#include <sys/sysctl.h>

@import CoreTelephony;

@implementation RNDeviceSpecs

RCT_EXPORT_MODULE()

- (NSString *)platform {
    size_t size;
    sysctlbyname("hw.machine", NULL, &size, NULL, 0);
    char *machine = malloc(size);
    sysctlbyname("hw.machine", machine, &size, NULL, 0);
    NSString *platform = [NSString stringWithUTF8String:machine];
    free(machine);
    return platform;
}

- (NSString *) carrier {
    CTTelephonyNetworkInfo *netinfo = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [netinfo subscriberCellularProvider];
    NSString *carrierName = carrier.carrierName;
    if (carrierName == nil) {
        carrierName = @"No Carrier";
    }
    
    return carrierName;
}

- (NSNumber *) totalDiskSpaceInBytes {
    NSNumber *fileSystemSizeInBytes = 0;
    NSError *error = nil;
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSDictionary *dictionary = [[NSFileManager defaultManager] attributesOfFileSystemForPath:[paths lastObject] error: &error];
    
    if (dictionary) {
        fileSystemSizeInBytes = [dictionary objectForKey: NSFileSystemSize];
    } else {
        NSLog(@"Error Obtaining Disk Memory: Domain = %lld, Code = %lld", [[error domain] longLongValue], [[error domain] longLongValue]);
    }
    
    return fileSystemSizeInBytes;
}

- (NSNumber *)availableDiskSpaceInBytes{
    __autoreleasing NSError *error = nil;
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSDictionary *dictionary = [[NSFileManager defaultManager] attributesOfFileSystemForPath:[paths lastObject] error: &error];
    
    NSNumber *freeFileSystemSizeInBytes;
    
    if (dictionary) {
         freeFileSystemSizeInBytes = [dictionary objectForKey:NSFileSystemFreeSize];
    }
    else {
        NSLog(@"Error Obtaining System Memory Info: Domain = %lld, Code = %lld", [[error domain] longLongValue], [[error domain] longLongValue]);
        return [[NSNumber alloc] initWithInt:0];
    }
    
    return freeFileSystemSizeInBytes;
}

- (NSNumber *)usedDiskSpaceInBytes{
    
    NSNumber * totalBytes = [self totalDiskSpaceInBytes];
    NSNumber * availableBytes = [self availableDiskSpaceInBytes];
    
    if( [totalBytes compare:availableBytes] == NSOrderedAscending ){
        return [[NSDecimalNumber alloc] initWithInt:0];
    }
    
    return [[NSNumber alloc] initWithLong: [totalBytes longValue] - [availableBytes longValue]];
    
}

- (NSDictionary *)constantsToExport
{
    return @{
         @"platform": [self platform],
         @"carrier": [self carrier],
         @"diskTotalBytes": [self totalDiskSpaceInBytes],
         @"diskAvailableBytes": [self availableDiskSpaceInBytes],
         @"diskUsedBytes": [self usedDiskSpaceInBytes]
    };
}



@end
