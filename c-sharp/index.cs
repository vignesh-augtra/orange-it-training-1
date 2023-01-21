using System;
using System.Runtime.InteropServices;
using EDSDK;

class Program
{
    // Import the EDSDK library
    [DllImport("EDSDK.dll")]
    public static extern uint EdsInitializeSDK();
    [DllImport("EDSDK.dll")]
    public static extern uint EdsTerminateSDK();
    [DllImport("EDSDK.dll")]
    public static extern uint EdsGetCameraList(out IntPtr cameraList);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsGetDeviceInfo(IntPtr camera, out EDSDK.EdsDeviceInfo deviceInfo);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsOpenSession(IntPtr camera);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsCloseSession(IntPtr camera);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsSendCommand(IntPtr camera, uint command, uint parameter);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsDownload(IntPtr camera, uint objectID, uint size, out IntPtr elem);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsSaveImage(IntPtr elem, string fileName);
    [DllImport("EDSDK.dll")]
    public static extern uint EdsRelease(IntPtr elem);

    static void Main(string[] args)
    {
        // Initialize the EDSDK
        uint result = EdsInitializeSDK();

        // Get the list of connected cameras
        IntPtr cameraList;
        result = EdsGetCameraList(out cameraList);

        // Get the first camera in the list
        IntPtr camera = Marshal.ReadIntPtr(cameraList);

        // Get the device information for the camera
        DeviceInfo deviceInfo;
        result = EdsGetDeviceInfo(camera, out deviceInfo);

        // Open a session with the camera
        result = EdsOpenSession(camera);

        // Take a photo
        result = EdsSendCommand(camera, (uint)Command.TakePicture, 0);

        // Download the photo from the camera
        IntPtr image;
        result = EdsDownload(camera, 0, 0, out image);

        // Save the photo to a file on the host
        string fileName = "photo.jpg";
        result = EdsSaveImage(image, fileName);

        // Release the resources used by the EDSDK
        result = EdsRelease(image);
        result = EdsCloseSession(camera);
        result = EdsTerminateSDK();

        Console.WriteLine("Photo saved to: " + fileName);
        Console.ReadKey();
    }
}
