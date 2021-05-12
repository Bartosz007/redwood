package pl.bartosz007.redwood.services;

import net.bytebuddy.utility.RandomString;

import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


public class FileDecoder {
    private String fileName;
    private String body;
    private static final String folder =  "..\\redwood-frontend\\public\\images\\";
    public FileDecoder(String base64String) {
        String[] strings = base64String.split(",");
        this.fileName = getCustomName(strings[0]);
        this.body = strings[1];
    }

    public void saveByte64ToFile(){

        File file = new File(folder+fileName);

        byte[] data = DatatypeConverter.parseBase64Binary(body);
        try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
            outputStream.write(data);
            System.out.println("zapisano plik");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private static String getCustomName(String extension){

        StringBuffer fileNameBuffer = new StringBuffer();
        fileNameBuffer.append(new RandomString(10).nextString());
        fileNameBuffer.append("_");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy_MM_dd");
        fileNameBuffer.append(LocalDate.now().format(formatter));

        switch (extension) {//check image's extension
            case "data:image/jpeg;base64":
                fileNameBuffer.append(".jpeg");
                break;
            case "data:image/png;base64":
                fileNameBuffer.append(".png");
                break;
            default:
                fileNameBuffer.append(".jpg");
                break;
        }

        return fileNameBuffer.toString();
    }

    public String getFileName() {
        return fileName;
    }
}
